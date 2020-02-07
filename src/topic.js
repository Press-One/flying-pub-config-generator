const PrsUtil = require('prs-utility');

exports.create = () => {
  const {
    privateKey,
    address
  } = PrsUtil.createKeyPair({
    dump: true
  });
  return {
    privateKey,
    address
  };
};