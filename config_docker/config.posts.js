const serviceRoot = "http://localhost:9000";
const serviceKey = "POSTS";

module.exports = {

  'debug': false,

  'sequelizeLogging': false,

  'serviceRoot': `${serviceRoot}`,

  'serviceKey': `${serviceKey}`,

  'host': `localhost`,

  'port': 9000,

  'queuePort': 9001,

  'testPort': 9002,

  'logo': `https://xue-images.pek3b.qingstor.com/17-flying-pub.png`,

  'db': {
    'host': `postgres`,
    'database': `posts`,
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
      'aesKey': `OLK48kq9gqZfcSZZKscpBlt1f2NzF7foOpu4VizE94E=`,
      'clientSecret': `5c01a9d07ec45d6bff2a5360cb97a07a457a5f75d6fefc163e8d9f4d0451cdd6`,
      'pinCode': `851623`,
      'clientId': `44931a6d-2029-4c8d-888f-cbb3afe509bb`,
      'sessionId': `d8af6036-1424-4cc2-8939-e8959e0675d0`,
      'pinToken': `W7NAyQL7PR+tmpSnOOl/uz1Vi2YLh9SrNRRojloecBulFn6EAvlz0pkfZEmqjzLV+g+FYP31QdUW1of3wVELYsF6AMizWHteLU9ttI7aLTDlIclIxFgeTGydiz2HTxKA2IYykBInXdereqWBds7B1drpr4Uyu0/1XaafvAOo7+4=`,
      'privateKey': `-----BEGIN RSA PRIVATE KEY-----\r\nMIICWwIBAAKBgQCLQQgvIzUKOYSShEFkHOuUo/uG7ocnOjTsvbyZlWdoZVkK6TZE\r\nEabLT7OpBoaTKiTQMa2C/LsC0h2lgruEreTMjyex2qB0ZHESlQ0PJliqJFUUo5U+\r\nBtbVzGj4A2sORWQ12yI339LJy8xcMspUzOvRWj/+lV0RCcAoDsbn5+fhUwIDAQAB\r\nAoGAGzd9qwDdl/7/60cQJMoGPUoDmi66ma8lsvOujfIGgP/19Ez6fzlX+Tq9qZaN\r\n7Ot6wHpFKGnO/1Ej3Dp9/gOiyRBdoG7g9YamX9c4ySdKYgxALvvtKrtqHvl+GVDy\r\nFevSe5u41IV+AhVcjaqzCwREWitNfGfgkLWlRcXYQ6aX2XECQQDwz68C8fpRy3yP\r\nnR/FxClchykKejlSr9k44n4sz8qeT15a9Q/7UGNKODxJAee5Jl3l/w7JkSuGbR5j\r\neplmN/3LAkEAlAmHwknrYYiJYNIJ4IoVZz9lVIz8LZcABYYPX01m1GvkWPmlrX9Z\r\n3h7tLw9cpICM+6pUFAvW/7y8Lme3rO05mQJAA+FU0JdVkTvWJfpCKM2gXP1Qi/qs\r\nMcjjlycPIWm3uhVNT+ni+Amzj96YGhUNxs33dV1Gv7i3GtNnSfMPxbXhQQJAQAm3\r\nXoaXegOUWfvCJg3VoGo+LUsns5kEe184uyNCflWF3C9yShEzEPET7S2aB9dMJXnT\r\nETDl+o7sYK6hN/8O0QJACXmEdbROaNVq1B/9MYPkeC/z9h9YVu8DvqUw5muMpOVd\r\nye6n7ljFQl3ql6yF0yk5n3idyGPZ5ySb1Lhz9yhkKw==\r\n-----END RSA PRIVATE KEY-----\r\n`,
      'loginUrl': `/api/auth/mixin/login`,
      'callbackUrl': `${serviceRoot}/api/auth/mixin/callback`,
    },
  },

  'atom': {
    'topic': `1f4fbd2d257d8ba1cf9532f7f5eeb89cab02647c`,
    'authorsUrl': `http://atom_web:7070/users`,
    'postsUrl': `http://atom_web:7070/json_posts`,
  },

  'settings': {
    'site.name': `飞帖开发版`,
    'site.title': `飞帖开发版`,
    'site.slogan': `基于区块链的分布式数字内容交易及分发网络`,
    'author.page.enabled': true,
    'subscriptions.enabled': false,
    'filter.enabled': true,
    'filter.type': `POPULARITY`,
    'filter.popularity.enabled': false,
    'filter.dayRangeOptions': [3,7,30,0],
    'wallet.currencies': ['CNB','PRS','BOX','BTC','EOS','ETH'],
    'pub.site.url': `http://localhost:8000`,
    'menu.links': [],
    'permission.isPrivate': false,
    'permission.denyText': `您需要加入【飞帖开发版】才能阅读内容`,
    'permission.denyActionText': `如何加入？`,
    'permission.denyActionLink': `https://xxx.com/如何加入？`,
  },

  'auth': {
    'tokenKey': `${serviceKey}_token`,
    'whitelist': {
      'mixin': [],
      'github': [],
    },
  },

  'encryption': {
    'sessionKeys': ['1a7f99c2bfb308c6f0caeb6f67d2258f'],
    'jwtKey': `4d8f4c15becdec8c2b26f7239dab053be27ccf3123a2d43d3000940820b92713`,
    'aes256Cbc': {
      'key': `6626570b738658bca192127f820a27f603a6cf041b338fd88e879be8c6365fcc`,
      'ivPrefix': `d6b7a571511d0161a163099860eed76c249ad1a4889c3ca7b44775522ad77040`,
    },
    'aesKey256': [25,18,0,22,19,9,10,28,5,11,31,6,29,25,7,29,0,1,10,11,31,11,0,20,24,29,10,22,21,19,6,20],
  },

}