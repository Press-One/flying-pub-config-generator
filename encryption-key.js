const cryptoRandomString = require('crypto-random-string');

exports.create = () => ({
  sessionKeys: [CRS(32)],
  jwtKey: CRS(64),
  aes256Cbc: {
    key: CRS(64),
    ivPrefix: CRS(64)
  },
  aesKey256: aesKey256()
});

const CRS = (length) => cryptoRandomString({
  length
});

const aesKey256 = () => Array.from({
  length: 32
}, () => Math.floor(Math.random() * 32));