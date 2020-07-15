const fs = require('fs');
const path = require('path');
const util = require('util');
const ip = require('ip');
const defaultPubConfig = require('./default/config.pub');
const defaultReaderConfig = require('./default/config.reader');
const defaultWalletConfig = require('./default/config.wallet');
const Encryption = require('./encryption-key');
const MixinKey = require('./mixin-key');
const Topic = require('./topic');
const Stringify = require('./stringify');
const writeFile = util.promisify(fs.writeFile);
const {
  sleep
} = require('./utils');
const distDir = `./config`;
const isProd = process.env.NODE_ENV === 'production';
const argv = require('yargs').argv;

const main = async () => {
  const pubConfig = await generatePubConfig(defaultPubConfig);
  await sleep(1000);
  const atomEnvConfig = await generateAtomEnvConfig(pubConfig);
  await sleep(1000);
  const atomSettingsTomlConfig = await generateAtomSettingsTomlConfig(pubConfig, atomEnvConfig);
  await sleep(1000);
  await generateReaderConfig(defaultReaderConfig, pubConfig, atomSettingsTomlConfig);
  await generateWalletConfig('pub', defaultWalletConfig);
  await generateWalletConfig('reader', defaultWalletConfig);
  console.log('\n你已成功生成所有配置文件！');
  await sleep(1000);
};

const generatePubConfig = async (config) => {
  config.encryption = Encryption.createEncryption('pub');
  config.topic = Topic.create();
  config.auth.apiAccessKey = Encryption.CRS(32);
  if (argv.skipMixin) {
    console.log('跳过，不生成 pub Mixin 配置');
  } else {
    const mixin = await MixinKey.create('pub', config);
    appendMixin(config, mixin);
  }
  appendVariables('pub', config);
  const filename = 'config.pub.js';
  const variableString = Stringify.getVariableString(config.port, 'PUB');
  const configString = Stringify.getConfigString(config);
  await writeConfigJs(filename, variableString, configString);
  console.log(`\n已生成配置文件 ${distDir}/${filename}`);
  return config;
};

const generateWalletConfig = async (type, config) => {
  config.encryption = Encryption.createWalletEncryption();
  config.db.host = isProd ? 'postgres' : 'localhost';
  config.db.database = `${type}_wallet`;
  const filename = `config.${type}-wallet.js`;
  const configString = Stringify.getConfigString(config);
  await writeConfigJs(filename, '', configString);
  console.log(`\n已生成配置文件 ${distDir}/${filename}`);
  return config;
};

const generateAtomEnvConfig = async (pubConfig) => {
  const config = {
    RUST_LOG: 'debug',
    POSTGRES_PASSWORD: '39f12851f5275222e8b50fddddf04ee4',
    POSTGRES_DB: 'atom',
    DATABASE_URL: `postgres://postgres:39f12851f5275222e8b50fddddf04ee4@postgres:5432/atom`
  };
  let string = '';
  for (let key in config) {
    string += `${key}=${config[key]}\n`;
  }
  const filename = 'atom.env';
  if (!fs.existsSync(distDir)) {
    fs.mkdirSync(distDir);
  }
  await writeFile(path.join(distDir, filename), string);
  console.log(`\n已生成配置文件 ${distDir}/${filename}`);
  return config;
};

const generateAtomSettingsTomlConfig = async (pubConfig, atomEnvConfig) => {
  const config = {
    '[atom]': {
      db_url: atomEnvConfig.DATABASE_URL,
      prs_base_url: "https://prs-bp[1-3].press.one/api/chain",
      bind_address: '0.0.0.0:7070',
      thread_num: 50,
      xml_output_dir: `/app/src/output`
    },
    '[[topics]]': {
      name: 'pub',
      topic: pubConfig.topic.address,
      webhook: `http://${isProd ? 'pub' : ip.address()}:${pubConfig.port}/api/webhook/medium`,
      encryption_key: pubConfig.encryption.aes256Cbc.key,
      iv_prefix: pubConfig.encryption.aes256Cbc.ivPrefix,
    }
  }
  let string = '';
  for (let key in config) {
    string += `${key}\n`;
    for (let subKey in config[key]) {
      const value = config[key][subKey];
      const valueString = typeof value === 'string' ? `"${value}"` : value;
      string += `${subKey} = ${valueString}\n`;
    }
    string += '\n';
  }
  const filename = 'Settings.toml';
  if (!fs.existsSync(distDir)) {
    fs.mkdirSync(distDir);
  }
  await writeFile(path.join(distDir, filename), string);
  console.log(`\n已生成配置文件 ${distDir}/${filename}`);
  return config;
}

const generateReaderConfig = async (config, pubConfig, atomSettingsTomlConfig) => {
  config.encryption = Encryption.createEncryption('reader');
  config.auth.apiAccessKey = pubConfig.auth.apiAccessKey;
  const atomPort = atomSettingsTomlConfig['[atom]'].bind_address.split(':')[1];
  config.atom = {
    topic: pubConfig.topic.address,
    authorsUrl: `http://${isProd ? 'atom_web' : 'localhost'}:${atomPort}/users`,
    postsUrl: `http://${
      isProd ? 'atom_web' : 'localhost'
    }:${atomPort}/json_posts`,
  };
  if (argv.skipMixin) {
    console.log('\n跳过，不生成 reader Mixin 配置');
  } else {
    const mixin = await MixinKey.create('reader', config);
    appendMixin(config, mixin);
  }
  appendVariables('reader', config);
  const filename = 'config.reader.js';
  const variableString = Stringify.getVariableString(config.port, 'READER');
  const configString = Stringify.getConfigString(config);
  await writeConfigJs(filename, variableString, configString);
  console.log(`\n已生成配置文件 ${distDir}/${filename}`);
};

const writeConfigJs = async (filename, variableString, configString) => {
  if (!fs.existsSync(distDir)) {
    fs.mkdirSync(distDir);
  }
  await writeFile(
    path.join(distDir, filename),
    `${variableString}module.exports = ${configString}`
  );
};

const appendMixin = (config, mixin) => {
  config.provider.mixin = {
    ...mixin,
    ...config.provider.mixin,
  };
  config.settings['notification.mixin.id'] = mixin.id;
  return config;
};

const appendVariables = (type, config) => {
  config.serviceRoot = `\${serviceRoot}`;
  config.serviceKey = `\${serviceKey}`;
  config.auth.tokenKey = `\${serviceKey}token`;
  config.provider.mixin.callbackUrl = `\${serviceRoot}${config.provider.mixin.callbackUrl}`;
  config.db.host = isProd ? 'postgres' : 'localhost';
  config.redis.host = isProd ? 'redis' : 'localhost';
  if (type === 'pub') {
    config.settings[
      'reader.url'
    ] = `http://localhost:${defaultReaderConfig.port}`;
    config.settings[
      'reader.apiEndPoint'
    ] = `http://localhost:${defaultReaderConfig.port}/api`;
  } else if (type === 'reader') {
    config.settings[
      'pub.site.url'
    ] = `http://localhost:${defaultPubConfig.port}`;
  }
};

exports.main = main;