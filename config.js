const config = {
  sessionKeys: ['0b06684a4a6274df375aa1e128c4ab69'],
  encryption: {
    jwt: {
      key: '09a5029d297d320b8438ede05043b33f21e462b260bec299f4e814a48735fa7e'
    },
    aes: {
      aesKey256: [
        11,
        19,
        1,
        2,
        30,
        5,
        0,
        13,
        8,
        6,
        27,
        3,
        21,
        26,
        7,
        25,
        9,
        20,
        31,
        17,
        22,
        14,
        24,
        23,
        29,
        15,
        4,
        16,
        18,
        28,
        12,
        10
      ]
    },
    aes256Cbc: {
      key: 'daf786d6738c2b44a3f884f23fcf68db99103128241bcbc0345d1660155c8d5b',
      ivPrefix: '5b52d68fefc1f24d4ee8cd8d23dff9a6d21742ff7cd2fcacbd7e8679f41051a2'
    }
  }
};

module.exports = config;