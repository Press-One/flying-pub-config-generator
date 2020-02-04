const serviceRoot = "http://192.168.2.190:8000";
const serviceKey = "PUB";

module.exports = {

  'debug': false,

  'sequelizeLogging': false,

  'serviceRoot': `${serviceRoot}`,

  'serviceKey': `${serviceKey}`,

  'host': `127.0.0.1`,

  'port': 8000,

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
      'aesKey': `PEC5vcx1Y1gZWG08sYFZ5KuyCLCHc4auG0YSzwnKbj4=`,
      'clientSecret': `cf94512e54514b68d23ed1befd12548444a7bf7bb2b1064e732842ea8b658b0b`,
      'pinCode': `339125`,
      'clientId': `73542b48-ebaa-48da-9587-302cc4095c37`,
      'sessionId': `54288ffd-5161-4950-bf66-bf46c7dc1a29`,
      'pinToken': `z42L6uSFOdCU6X/aC0WmDv+0IVpd1Ja+J0w6kk1i2AjBsk7ujxZVkZB1vT0a1T6TzPTlFOuU9yhPhWKHk477yxWZrHlgvKkKk2LMZSnYTzpB+aVIkPG65MjLOplRV4sD7WMSh8vbFppRE0L2sQvOeM3jLU/WlNDkwaWDhdtpn5A=`,
      'privateKey': `-----BEGIN RSA PRIVATE KEY-----\r\nMIICXQIBAAKBgQDoW2Fz+cP4BGizSsyoJdoIg2bUfz7fNQRx3CusTz8qIGhaCuTS\r\nJU2EpAezHTDmzMiVNUay5vP/TH2zoOPD76mz4NmVsuwXEWVPImJMc/QZ8kHHQ1gN\r\npQrrfOd7oahvZiTbAyKxqmW+sBwc9D+HHJrG2O1kbGzkqej0A9L46NhdGwIDAQAB\r\nAoGBAIwAg3edxrZp8awWJborFHSMuCjRgtB64XK5dpccKLL5U+btKXJ1h3+kVf9W\r\nV2C5gyJkN3UUM3BgZl0VVCd7AIR7jv9FphbjmHaPdXSttP8oCBJMeEXixs2+jXID\r\nIElUIPopKI+N3hZsag/i1yZIxeHmF/N6Q9fcHl62nlrbNiwBAkEA/hIGk4C7aqO3\r\n0sqiUeAYImDaYQp0BMBbHn3wJZhuIRJzi/jMhV6LD9begEonIKBNdOGyzAb9A+Mg\r\nSdsX4sBZ2QJBAOofI4bnpXFXNE2lvqaUVq45Vo2XwAmYquNsImec/nDHNnC3AxSM\r\n+4uFlEGAT5iHRGl6uWRK0XN3i8+QCboOAhMCQDU3U1dL7HWOqy8ksFET7hotTTBs\r\nPxbLr4o4eLd3MQIOWlNkHnqE7f24VMxsO7vSt8aWi5u+jvpkdVvi3yLohSkCQGXL\r\nWjga2h1YrD4ila16C+I+vfpcg7vobEzrxF3Grf69L1d8y1MRJYH5d4evUWxhTAaM\r\nvLT1rvIEhX6fAwupcY8CQQDg+rRXCMrgGQv4LF1jmdR2ZsS/8sGvDbtBFUk9TrmX\r\n83qHKq2OpvbqTR3wBSu+VecFktsSRF6xrDqOs7855SWB\r\n-----END RSA PRIVATE KEY-----\r\n`,
      'loginUrl': `/api/auth/mixin/login`,
      'callbackUrl': `${serviceRoot}/api/auth/mixin/callback`,
    },
  },

  'topic': {
    'privateKey': `eafe937c180ec3131254f420c9be44867c9d88d7ff9081f9058c63957eb420d1`,
    'address': `c92f651038f333087c650408b2c164d9b7f92ab2`,
  },

  'settings': {
    'site.name': `飞帖写作站`,
    'site.title': `写作站开发版 | 飞帖`,
    'site.shortTitle': `飞帖写作站`,
    'site.slogan': `基于区块链的分布式数字内容交易及分发网络`,
    'reader.url': ``,
    'reader.rulePostUrl': ``,
    'wallet.currencies': ['CNB', 'PRS', 'BOX', 'BTC', 'EOS', 'ETH'],
    'auth.providers': ['mixin'],
    'permission.isPrivate': false,
    'permission.denyText': `您需要加入【飞帖开发版】才能阅读内容`,
    'permission.denyActionText': `如何加入？`,
    'permission.denyActionLink': `https://xxx.com/如何加入？`,
  },

  'auth': {
    'tokenKey': `${serviceKey}_token`,
    'adminIds': [1],
    'whitelist': {
      'mixin': [],
      'github': [],
    },
  },

  'encryption': {
    'sessionKeys': ['61c4f467f2e9ccc46232ee25cb5ffc08'],
    'jwtKey': `d4d6482040af74658a97b4322969cc0fd52c48cb3f5a533cece653182837f804`,
    'aes256Cbc': {
      'key': `1036c19dbb1dce25cfac89c0c4f82fbdf1dd3700369f8719fa44587b8c4e1bb5`,
      'ivPrefix': `2b1ae6b159c7c1990273442fd43a10498d4bf1fb8f3b8d6739889e04a484b9d1`,
    },
    'aesKey256': [6, 31, 18, 4, 5, 12, 0, 5, 21, 8, 6, 6, 31, 2, 28, 13, 3, 24, 23, 19, 10, 3, 6, 28, 2, 7, 11, 29, 27, 28, 10, 14],
  },

  // 以下配置不属于开源配置
  telegramBot: {
    enabled: true,
    url: 'http://dev.press.one:8091/forward'
  },

  qingCloud: {
    accessKeyId: 'JKYQFBAPQERCWGJTTXAA',
    secretAccessKey: 'ZFzuDynfMEQJrlF2ZLIoZtBiPFSMuAMgUmXAi6Rg',
    zone: 'pek3b',
    bucketName: 'pub-images'
  }
}