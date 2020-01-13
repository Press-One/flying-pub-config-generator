const fs = require('fs');
const util = require('util');
const Prompt = require('./prompt');
const KeyGenerator = require('./key-generator');
const config = require('./default.config');
const ip = require('ip');
const MixinKey = require('./mixin-key');
const writeFile = util.promisify(fs.writeFile);
const unlink = util.promisify(fs.unlink);

const start = async () => {
  config.encryption = generateEncryption();
  const mixin = await generateMixin();
  appendMixinToConfig(config, mixin);
  const variableString = getVariableString(config.port, 'PUB');
  config.serviceRoot = `\${serviceRoot}`;
  config.serviceKey = `\${serviceKey}`;
  config.session.key = `\${serviceKey}:sess`;
  config.auth.key = `\${serviceKey}_token`;
  const configString = getConfigString(config);
  await writeConfigJs('develop.config.js', variableString, configString);
  console.log(`已生成配置文件`);
};

const getServiceRoot = port => `http://${ip.address()}:${port}`;

const generateEncryption = () => ({
  sessionKeys: [KeyGenerator.cryptoRandomString(32)],
  jwtKey: KeyGenerator.cryptoRandomString(64),
  aes256Cbc: {
    key: KeyGenerator.cryptoRandomString(64),
    ivPrefix: KeyGenerator.cryptoRandomString(64)
  },
  aseKey256: KeyGenerator.aesKey256()
});

const writeConfigJs = async (filename, variableString, configString) => {
  await writeFile(filename, `${variableString}module.exports = ${configString}`);
};

const getVariableString = (port, serviceKey) => {
  const map = {
    serviceRoot: getServiceRoot(port),
    serviceKey
  };
  let string = '';
  for (const key in map) {
    string += `const ${key} = "${map[key]}";\n`;
  }
  return `${string}\n`;
}

const tryAddQuote = item => {
  return typeof item === 'string' ? `\`${item}\`` : item;
}

const getConfigString = (config, level = 1) => {
  const isArray = (!!config) && (config.constructor === Array);
  if (isArray) {
    const array = config.map(item => {
      return typeof item === 'string' ? `'${item}'` : item;
    });
    return `[${array}]`;
  }
  let string = '{';
  string += level === 1 ? '\n\n' : '\n';
  const keyIndent = '  '.repeat(level);
  for (const key in config) {
    if (typeof config[key] === 'object') {
      string += `${keyIndent}'${key}': ${getConfigString(config[key], level + 1)},`;
    } else {
      string += `${keyIndent}'${key}': ${tryAddQuote(config[key])},`;
    }
    string += level === 1 ? '\n\n' : '\n';
  }
  const closeBracketIndent = '  '.repeat(level - 1);
  return `${string}${closeBracketIndent}}`;
}

const generateMixin = async () => {
  const mixin = await Prompt.mixin();
  const keyPath = 'mixin.key';
  await writeFile('mixin.key', mixin.privateKey);
  const aseKey = await MixinKey.decrypt({
    keyPath,
    sessionId: mixin.sessionId,
    pinToken: mixin.pinToken
  });
  await unlink(keyPath);
  return {
    aseKey,
    ...mixin
  };
};

const appendMixinToConfig = (config, mixin) => {
  config.provider.mixin = {
    ...mixin,
    ...config.provider.mixin
  };
  config.provider.mixin.callbackUrl = `\${serviceRoot}${config.provider.mixin.callbackUrl}`;
  return config;
}

start();