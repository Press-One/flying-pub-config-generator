const serviceRoot = "http://192.168.31.120:8000";
const serviceKey = "PUB";

module.exports = {

  'debug': false,

  'serviceKey': `${serviceKey}`,

  'host': `127.0.0.1`,

  'port': `8000`,

  'queuePort': 8061,

  'testPort': 8092,

  'logo': `https://xue-images.pek3b.qingstor.com/17-flying-pub.png`,

  'db': {
    'host': `127.0.0.1`,
    'database': `pub`,
    'user': `postgres`,
    'password': `8e01d6f60c7a846c38d5f99cf3f53383`,
    'dialect': `postgres`,
  },

  'redis': {
    'host': `127.0.0.1`,
    'port': 6379,
    'connectTimeout': 3000,
  },

  'session': {
    'key': `${serviceKey}:sess`,
    'maxAge': 86400000,
    'overwrite': true,
    'httpOnly': true,
    'signed': true,
    'rolling': false,
    'renew': false,
  },

  'provider': {
    'mixin': {
      'aseKey': `zBHF2qd5VoeH5AKDZpJESnI2cyIGeSfCfZN11ZbCm8c=`,
      'clientSecret': `426d371732355187fc15a8f2c6280b4ee5d149b00cf0689b945cbc3274ddfe01`,
      'pinCode': `618818`,
      'clientId': `73542b48-ebaa-48da-9587-302cc4095c37`,
      'sessionId': `214ff834-595e-41c3-ad1b-e962ff668cef`,
      'pinToken': `h9Fs6wW2XUPng+8tJppvGieYPlREHo07C1GoY7RLKZYs6XO1ZxN4fX4+5GF0dAs4R4fBR3r/N9opS/G5Jmtmg8kD2mkR8i09rohdDPeCiz5dsylXSuIgGI0jOTIG6woHvkrGaZRcmFMpqJaXXsUpWg2hdzbsYE5r7bc5d7sfM3Y=`,
      'privateKey': `-----BEGIN RSA PRIVATE KEY-----
MIICXAIBAAKBgQCm387AE+fwehTJMJW2D/EOUqaMXHmXFM6nmgccw+xgW8qcUan0
LRiOF6UgU8/awr4RKLVFpFDnN0Je5NVI6G16+qiFQhrK2qfamPHuooi92yDYG1R+
CMV/ZzrU/LlhLA0L4FIAUdUMbmF8I4Jthip9RWgzn2CLlzJoLecxhlGqLQIDAQAB
AoGAfEz/44GwZid5rjd7fSc4xxN3rdwAUjKUkLGiFKI4Q7p8HJ6T+ydQQB+Kx57G
mEwxafSpultgTCqUTL0lxm4jhZpZDBQrF/DjZAlzYyUL2sX3VSmLytrS6txFWN/i
5KiU0XvjRTDJU6wDJbGID68ikaHPAGspDbnfhm47o8CUmt0CQQD814s+nE2gQd3u
Fs7cOkseHkZKm771ThABJm2YlVOccyuWHoCSQXmSjlawzCSx7hRc3SizxggnplCc
f9wq58XjAkEAqPViTSrNvDllojYkdI/SYB2uR+INRxclJZujJsPxJAw/woBkeT7W
Zo1wNuz2nIWHdq+KTE1Ez7Y1/CF0yfZMrwJAdaxHNPN/uTcOd7GLwrkqnrDOXAjS
Pc5/6lkdJqdQy35aabp2chsg3pF6TTwlU94PAg031Ts0LmfcGonzSNCnqwJAfPoN
vaDkz87xE7zS2HmuFrS9vqRCSAyhyKDIXRthGtYIr7nDGEBX3UHP+IDtpjfLTQpp
1SjutmpEonyo499RNwJBANnhNGto1jfzGEPw8rV2I256YMfNPo9qEDDZnEq37ZVP
ifi/02XWH12dhYjQBuVqvk9paqH3rGpneyDa3P8ehaY=
-----END RSA PRIVATE KEY-----
`,
      'loginUrl': `/api/auth/mixin/login`,
      'callbackUrl': `${serviceRoot}/api/auth/mixin/callback`,
    },
  },

  'queue': {
    'syncBlock': true,
  },

  'topic': {
    'address': `f62dbcc26f79dbbd0bc24640971ae8390f417a62`,
  },

  'settings': {
    'site.name': `BOX 定投`,
    'site.title': `PRESS.one 写作站 | 飞贴`,
    'site.shortTitle': `PRESS.one 写作站`,
    'site.slogan': `基于区块链的分布式数字内容交易及分发网络`,
    'reader.url': `https://xue.prsdev.club`,
    'reader.rulePostUrl': `https://xue.prsdev.club/posts/2517ef4198d224d4396e98df12c86a5af117a84275f1d69e4ab471fb8384f220`,
    'wallet.currencies': ['CNB','PRS','BOX','BTC','EOS','ETH'],
    'auth.providers': ['pressone'],
    'permission.isPrivate': false,
    'permission.denyText': `您需要加入【BOX 定投践行群】才能阅读内容`,
    'permission.denyActionText': `如何加入？`,
    'permission.denyActionLink': `https://support.exinone.com/hc/zh-cn/articles/360032511651-关于加入-BOX-定投践行群-的说明`,
  },

  'auth': {
    'tokenKey': ``,
    'whitelist': {
      'mixin': [1095057],
      'github': [],
    },
    'permissionDenyUrl': `http://localhost:4000/permissionDeny`,
    'boxGroupToken': `e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855`,
    'xueUserExtraApi': `https://dev.prsdev.club/hub/api/users-extra`,
    'xueAdminToken': `06d60bd1df9d5bd240b19c37313f822fd996b61912099e4d843fc0a29caf5895b997e93bbdbe1835359acb8a45f67e07c04d953794784f8ff7a2fd1a4b0103cd`,
    'key': `${serviceKey}_token`,
  },

  'encryption': {
    'sessionKeys': ['48537f427298208aa127d7d372c33e25'],
    'jwtKey': `5ae53dd7f630ae495643a6fd97a14ba7fe0292e09af1e0ea48f86c4819fa4edd`,
    'aes256Cbc': {
      'key': `15f045e4ba8862abb7ec177ad559837aeaa258205ce786ae727567175508f900`,
      'ivPrefix': `0c54ad8a8975a3448abd753d8985f6c4468ea1175edeee223a7b8b33f4da97f6`,
    },
    'aseKey256': [17,8,21,9,3,6,5,17,27,29,20,16,23,5,19,16,1,0,5,18,25,14,15,17,7,7,28,13,13,27,5,31],
  },

  'serviceRoot': `${serviceRoot}`,

}