const cryptoRandomString = require('crypto-random-string');

exports.cryptoRandomString = (length) => cryptoRandomString({
  length
});

exports.aesKey256 = () => Array.from({
  length: 32
}, () => Math.floor(Math.random() * 32));