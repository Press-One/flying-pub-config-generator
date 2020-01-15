const fs = require('fs');
const path = require('path');
const util = require('util');
const ip = require('ip');
const defaultPubConfig = require('./default/config.pub');
const defaultPostsConfig = require('./default/config.posts');
const Encryption = require('./encryption-key');
const MixinKey = require('./mixin-key');
const Topic = require('./topic');
const Stringify = require('./stringify');
const writeFile = util.promisify(fs.writeFile);

const main = async () => {
  const pubConfig = await generatePubConfig(defaultPubConfig);
  const atomConfig = await generateAtomConfig(pubConfig);
  await generatePostsConfig(defaultPostsConfig, pubConfig, atomConfig);
};

const generatePubConfig = async config => {
  config.encryption = Encryption.create();
  config.topic = Topic.create();
  const mixin = await MixinKey.create('pub');
  appendMixin(config, mixin);
  appendVariables(config);
  const filename = 'config.pub.js';
  const variableString = Stringify.getVariableString(config.port, 'PUB');
  const configString = Stringify.getConfigString(config);
  await writeConfigJs(filename, variableString, configString);
  console.log(`已生成配置文件 config/${filename}\n`);
  return config;
};

const generateAtomConfig = async pubConfig => {
  const config = {
    RUST_LOG: 'debug',
    POSTGRES_PASSWORD: '0c7f7ba8cca580c550e5f16023a6681f',
    POSTGRES_DB: 'atom',
    DATABASE_URL: 'postgres://postgres:0c7f7ba8cca580c550e5f16023a6681f@localhost:5432/atom',
    EOS_BASE_URL: 'https://prs-bp1.press.one/api/chain',
    TOPIC: `${pubConfig.topic.address};http://${ip.address()}:${pubConfig.port}/api/webhook/medium`,
    BIND_ADDRESS: '0.0.0.0:7070',
    ENCRYPTION_KEY: pubConfig.encryption.aes256Cbc.key,
    IV_PREFIX: pubConfig.encryption.aes256Cbc.ivPrefix,
    XML_OUTPUT_DIR: `${__dirname}/output`,
    THREAD_NUM: '20'
  };
  let string = '';
  for (let key in config) {
    string += `${key}=${config[key]}\n`;
  }
  const filename = 'atom.env';
  await writeFile(path.join('./config', filename), string);
  console.log(`已生成配置文件 config/${filename}\n`);
  return config;
};

const generatePostsConfig = async (config, pubConfig, atomConfig) => {
  config.encryption = Encryption.create();
  const atomPort = atomConfig.BIND_ADDRESS.split(':')[1];
  config.atom = {
    topic: pubConfig.topic.address,
    authorsUrl: `http://${ip.address()}:${atomPort}/users`,
    postsUrl: `http://${ip.address()}:${atomPort}/posts`
  };
  const mixin = await MixinKey.create('posts');
  appendMixin(config, mixin);
  appendVariables(config);
  const filename = 'config.posts.js';
  const variableString = Stringify.getVariableString(config.port, 'POSTS');
  const configString = Stringify.getConfigString(config);
  await writeConfigJs(filename, variableString, configString);
  console.log(`已生成配置文件 config/${filename}`);
};

const writeConfigJs = async (filename, variableString, configString) => {
  await writeFile(
    path.join('./config', filename),
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

const appendVariables = config => {
  config.serviceRoot = `\${serviceRoot}`;
  config.serviceKey = `\${serviceKey}`;
  config.session.key = `\${serviceKey}:sess`;
  config.auth.tokenKey = `\${serviceKey}_token`;
  config.provider.mixin.callbackUrl = `\${serviceRoot}${config.provider.mixin.callbackUrl}`;
};

const start = async () => {
  try {
    await main();
  } catch (err) {
    console.log(`程序停止了，因为：${err.message}`);
  }
};

start();