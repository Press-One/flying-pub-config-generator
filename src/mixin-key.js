const Prompt = require('./prompt');
const fs = require('fs');
const util = require('util');
const exec = util.promisify(require('child_process').execFile);
const writeFile = util.promisify(fs.writeFile);
const unlink = util.promisify(fs.unlink);

exports.create = async (type, config) => {
  const homeUrl = `http://localhost:${config.port}`;
  const callbackUrl = `${homeUrl}${config.provider.mixin.callbackUrl}`;
  const mixin = await Prompt.mixin(type, homeUrl, callbackUrl);
  const keyPath = 'mixin.key';
  await writeFile('mixin.key', mixin.privateKey);
  const aesKey = await decrypt({
    keyPath,
    sessionId: mixin.sessionId,
    pinToken: mixin.pinToken
  });
  await unlink(keyPath);
  return {
    aesKey,
    ...mixin
  };
};

const decrypt = async (options = {}) => {
  const {
    keyPath,
    sessionId,
    pinToken
  } = options;
  const os_decrypt_file = {
    'linux': 'decryptkey_linux',
    'darwin': 'decryptkey_mac',
    'win32': 'decryptkey.exe'
  };
  const cmd = `./${os_decrypt_file[process.platform]}`;
  const args = [
    '-key', keyPath,
    '-label', sessionId,
    '-message', pinToken
  ];
  const {
    stdout,
    stderr
  } = await exec(cmd, args);
  if (stdout) {
    const aesKey = stdout.trim();
    return aesKey;
  }
  if (stderr) {
    console.log('stderr:', stderr);
  }
  return '';
}