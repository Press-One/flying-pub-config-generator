const util = require('util');
const exec = util.promisify(require('child_process').execFile);

exports.decrypt = async (options = {}) => {
  const {
    keyPath,
    sessionId,
    pinToken
  } = options;
  const cmd = './decryptkey';
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
    const aseKey = stdout.trim();
    return aseKey;
  }
  if (stderr) {
    console.log('stderr:', stderr);
  }
  return '';
}