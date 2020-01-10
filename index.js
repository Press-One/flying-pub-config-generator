const fs = require('fs');
const util = require('util');
const Prompt = require('./prompt');
const KeyGenerator = require('./key-generator');
const config = require('./default.config');
const ip = require('ip');

const start = async () => {
  config.serviceRoot = `http://${ip.address()}:${config.port}`;
  config.encryption = generateEncryption();
  const mixin = await Prompt.mixin();
  config.provider.mixin = {
    ...mixin,
    ...config.provider.mixin
  }
  await writeConfigJs('develop.config.js', config);
  console.log(`已生成配置文件`);
};

const generateEncryption = () => ({
  sessionKeys: [KeyGenerator.cryptoRandomString(32)],
  jwtKey: KeyGenerator.cryptoRandomString(64),
  aes256Cbc: {
    key: KeyGenerator.cryptoRandomString(64),
    ivPrefix: KeyGenerator.cryptoRandomString(64)
  },
  aseKey256: KeyGenerator.aesKey256()
});

const writeConfigJs = async (filename, config) => {
  const jsonString = JSON.stringify(config, null, 2);
  await util.promisify(fs.writeFile)(
    filename,
    `module.exports = ${jsonString}`
  );
};

start();