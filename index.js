const fs = require('fs');
const path = require('path');
const util = require('util');
const ip = require('ip');
const defaultPubConfig = require('./default/config.pub');
const defaultPostsConfig = require('./default/config.posts');
const defaultWalletConfig = require('./default/config.wallet');
const Encryption = require('./encryption-key');
const MixinKey = require('./mixin-key');
const Topic = require('./topic');
const Stringify = require('./stringify');
const writeFile = util.promisify(fs.writeFile);
const {
  sleep
} = require('./utils');
const distDir = `config_${process.env.NODE_ENV}`;
const isProd = process.env.NODE_ENV === 'production';

const main = async () => {
  const pubConfig = await generatePubConfig(defaultPubConfig);
  // await sleep(1000);
  const atomConfig = await generateAtomConfig(pubConfig);
  // await sleep(1000);
  await generatePostsConfig(defaultPostsConfig, pubConfig, atomConfig);
  await generateWalletConfig('pub', defaultWalletConfig);
  await generateWalletConfig('posts', defaultWalletConfig);
};

const generatePubConfig = async config => {
  config.encryption = Encryption.createPubAndPostEncryption();
  config.topic = Topic.create();
  const mixin = await MixinKey.create('pub', config);
  appendMixin(config, mixin);
  appendVariables('pub', config);
  const filename = 'config.pub.js';
  const variableString = Stringify.getVariableString(config.port, 'PUB');
  const configString = Stringify.getConfigString(config);
  await writeConfigJs(filename, variableString, configString);
  console.log(`已生成配置文件 ${distDir}/${filename}\n`);
  return config;
};

const generateWalletConfig = async (type, config) => {
  config.encryption = Encryption.createWalletEncryption();
  config.db.host = isProd ? 'postgres' : 'localhost';
  config.db.database = `${type}_wallet`;
  const filename = `config.${type}-wallet.js`;
  const configString = Stringify.getConfigString(config);
  await writeConfigJs(filename, '', configString);
  console.log(`已生成配置文件 ${distDir}/${filename}\n`);
  return config;
};

const generateAtomConfig = async pubConfig => {
  const config = {
    RUST_LOG: 'debug',
    POSTGRES_PASSWORD: '8e01d6f60c7a846c38d5f99cf3f53383',
    POSTGRES_DB: 'atom',
    DATABASE_URL: `postgres://postgres:8e01d6f60c7a846c38d5f99cf3f53383@postgres:5432/atom`,
    PRS_BASE_URL: 'https://prs-bp1.press.one/api/chain',
    TOPIC: `${pubConfig.topic.address};http://${isProd ? 'pub' : ip.address()}:${
      pubConfig.port
    }/api/webhook/medium`,
    BIND_ADDRESS: '0.0.0.0:7070',
    ENCRYPTION_KEY: pubConfig.encryption.aes256Cbc.key,
    IV_PREFIX: pubConfig.encryption.aes256Cbc.ivPrefix,
    XML_OUTPUT_DIR: `${__dirname}/output`,
    THREAD_NUM: '30'
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
  console.log(`已生成配置文件 ${distDir}/${filename}\n`);
  return config;
};

const generatePostsConfig = async (config, pubConfig, atomConfig) => {
  config.encryption = Encryption.createPubAndPostEncryption();
  const atomPort = atomConfig.BIND_ADDRESS.split(':')[1];
  config.atom = {
    topic: pubConfig.topic.address,
    authorsUrl: `http://${
      isProd ? 'atom_web' : 'localhost'
    }:${atomPort}/users`,
    postsUrl: `http://${
      isProd ? 'atom_web' : 'localhost'
    }:${atomPort}/json_posts`
  };
  const mixin = await MixinKey.create('posts', config);
  appendMixin(config, mixin);
  appendVariables('posts', config);
  const filename = 'config.posts.js';
  const variableString = Stringify.getVariableString(config.port, 'POSTS');
  const configString = Stringify.getConfigString(config);
  await writeConfigJs(filename, variableString, configString);
  console.log(`已生成配置文件 ${distDir}/${filename}`);
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
    ...config.provider.mixin
  };
  return config;
};

const appendVariables = (type, config) => {
  config.serviceRoot = `\${serviceRoot}`;
  config.serviceKey = `\${serviceKey}`;
  config.session.key = `\${serviceKey}:sess`;
  config.auth.tokenKey = `\${serviceKey}_token`;
  config.provider.mixin.callbackUrl = `\${serviceRoot}${config.provider.mixin.callbackUrl}`;
  config.db.host = isProd ? 'postgres' : 'localhost';
  config.redis.host = isProd ? 'redis' : 'localhost';
  if (type === 'pub') {
    config.settings[
      'reader.url'
    ] = `http://localhost:${defaultPostsConfig.port}`;
  } else if (type === 'posts') {
    config.settings[
      'pub.site.url'
    ] = `http://localhost:${defaultPubConfig.port}`;
  }
};

const start = async () => {
  try {
    await main();
  } catch (err) {
    if (!err.message) {
      console.log('已退出程序');
      return;
    }
    console.log(`程序停止了，因为：${err.message}`);
  }
};

start();