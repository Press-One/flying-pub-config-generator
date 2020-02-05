const serviceRoot = "http://localhost:8000";
const serviceKey = "PUB";

module.exports = {

  'debug': false,

  'sequelizeLogging': false,

  'serviceRoot': `${serviceRoot}`,

  'serviceKey': `${serviceKey}`,

  'host': `localhost`,

  'port': 8000,

  'queuePort': 8061,

  'testPort': 8092,

  'logo': `https://xue-images.pek3b.qingstor.com/17-flying-pub.png`,

  'db': {
    'host': `postgres`,
    'database': `pub`,
    'user': `postgres`,
    'password': `8e01d6f60c7a846c38d5f99cf3f53383`,
    'dialect': `postgres`,
  },

  'redis': {
    'host': `redis`,
    'port': 6379,
    'password': `a863a35d270fceb110f96374d75c219f`,
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
    'privateKey': `5fce73522f6a2b9974faf35eae31a556efa07cd62a507c44aac2a7f93fd698b0`,
    'address': `1f4fbd2d257d8ba1cf9532f7f5eeb89cab02647c`,
  },

  'settings': {
    'site.name': `飞帖写作站`,
    'site.title': `写作站开发版 | 飞帖`,
    'site.shortTitle': `飞帖写作站`,
    'site.slogan': `基于区块链的分布式数字内容交易及分发网络`,
    'reader.url': `http://localhost:9000`,
    'reader.rulePostUrl': ``,
    'wallet.currencies': ['CNB','PRS','BOX','BTC','EOS','ETH'],
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
    'sessionKeys': ['34e74388efeb966486736790a6036882'],
    'jwtKey': `85835e654741d8efa2379d60f675e81a5e3fb16f8c9ffb34e9951c0c14a6c152`,
    'aes256Cbc': {
      'key': `b14e33ff544e1fcdbd65dcee01a9bf7669ba20266c38bcc4c40d67010ad92cd8`,
      'ivPrefix': `0bf077323637ce2f2b0b01f07618a92860c8a866dc56c7ff8f6dcd5f58aa5d9c`,
    },
    'aesKey256': [2,4,26,12,30,8,25,22,3,6,19,10,16,16,4,21,0,7,15,9,12,18,24,4,27,7,21,20,24,25,7,1],
  },

}