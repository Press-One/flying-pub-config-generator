const cryptoRandomString = require('crypto-random-string');

exports.createEncryption = type => {
  const encryption = {
    sessionKeys: [CRS(32)],
    jwtKey: CRS(64),
    aes256Cbc: {
      key: CRS(64),
      ivPrefix: CRS(64)
    },
    aesKey256: aesKey256()
  };
  if (type === 'posts') {
    delete encryption.aes256Cbc;
  }
  return encryption;
};

exports.createWalletEncryption = () => ({
  salt: randomNumber(6),
  aesKey256: aesKey256()
})

const CRS = (length) => cryptoRandomString({
  length
});

const aesKey256 = () => Array.from({
  length: 32
}, () => Math.floor(Math.random() * 32));

const randomNumber = bit => {
  let str = '';
  let i = 0;
  while (i < bit) {
    const number = Math.round(Math.random() * 9);
    if (str || number > 0) {
      str += number;
      i++;
    }
  }
  return Number(str);
}