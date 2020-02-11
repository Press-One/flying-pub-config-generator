module.exports = {
  debug: false,

  sequelizeLogging: false,

  serviceRoot: '',

  serviceKey: '',

  host: 'localhost',

  port: 9000,

  queuePort: 9001,

  testPort: 9002,

  logo: `https://xue-images.pek3b.qingstor.com/17-flying-pub.png`,

  db: {
    host: '',
    database: 'reader',
    user: 'postgres',
    password: '8e01d6f60c7a846c38d5f99cf3f53383',
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

  atom: {},

  settings: {
    'site.name': '飞帖开发版',
    'site.title': '飞帖开发版',
    'site.slogan': '基于区块链的分布式数字内容交易及分发网络',
    'author.page.enabled': true,
    'subscriptions.enabled': false,
    'filter.enabled': true,
    'filter.type': 'POPULARITY',
    'filter.popularity.enabled': false,
    'filter.dayRangeOptions': [3, 7, 30, 0],
    'wallet.currencies': ['CNB', 'PRS', 'BOX', 'BTC', 'EOS', 'ETH'],
    'pub.site.url': 'https://write.firesbox.com',
    'menu.links': [], // { name: 'PRESS.one', url: 'https://press.one' }
    'permission.isPrivate': false,
    'permission.denyText': `您需要加入【飞帖开发版】才能阅读内容`,
    'permission.denyActionText': `如何加入？`,
    'permission.denyActionLink': `https://xxx.com/如何加入？`
  },

  auth: {
    tokenKey: '',
    whitelist: {
      mixin: [],
      github: []
    }
  },

  // console.log(` ------------- hard code ---------------`);
  // debugger by Junhong
  bot: {
    enabled: true,
    url: 'http://dev.press.one:8091/forward'
  }
};