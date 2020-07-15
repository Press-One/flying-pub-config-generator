module.exports = {
  debug: false,

  sequelizeLogging: false,

  serviceRoot: '',

  serviceKey: '',

  host: 'localhost',

  port: 8000,

  queuePort: 8061,

  testPort: 8092,

  favicon: 'https://img-cdn.xue.cn/favicon.ico',

  staticCDN: '',

  db: {
    host: '',
    database: 'pub',
    user: 'postgres',
    password: '39f12851f5275222e8b50fddddf04ee4',
    dialect: 'postgres'
  },

  redis: {
    host: '',
    port: 6379,
    password: 'a863a35d270fceb110f96374d75c219f',
    connectTimeout: 1000 * 3
  },

  session: {
    key: 'session',
    maxAge: 1000 * 60 * 60 * 24,
    overwrite: true,
    httpOnly: true,
    signed: true,
    rolling: false,
    renew: false
  },

  provider: {
    mixin: {
      loginUrl: '/api/auth/mixin/login',
      callbackUrl: `/api/auth/mixin/callback`
    }
  },

  topic: {},

  settings: {
    'site.name': '飞帖写作站',
    'site.title': '写作站开发版 | 飞帖',
    'site.shortTitle': '飞帖写作站',
    'site.slogan': '基于区块链的分布式数字内容交易及分发网络',
    'site.logo': 'https://img-cdn.xue.cn/17-flying-pub.png',
    'notification.enabled': true,
    'notification.mixin.id': 0,
    'reader.url': '',
    'reader.rulePostUrl': '',
    'reader.apiEndPoint': '',
    'wallet.currencies': ['CNB', 'PRS', 'BOX', 'BTC', 'EOS', 'ETH'],
    'auth.providers': ['mixin'],
    'permission.isPrivate': false,
    'permission.denyText': '您需要加入【飞帖开发版】才能阅读内容',
    'permission.denyActionText': '如何加入？',
    'permission.denyActionLink': 'https://xxx.com/如何加入？'
  },

  auth: {
    tokenKey: '',
    adminIds: [1],
    whitelist: {
      mixin: [],
      github: []
    }
  },

};