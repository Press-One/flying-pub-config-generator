module.exports = {
  debug: false,

  serviceKey: '',

  host: '127.0.0.1',

  port: '8000',

  queuePort: 8061,

  testPort: 8092,

  logo: 'https://xue-images.pek3b.qingstor.com/17-flying-pub.png',

  db: {
    host: '127.0.0.1',
    database: 'pub',
    user: 'postgres',
    password: '8e01d6f60c7a846c38d5f99cf3f53383',
    dialect: 'postgres'
  },

  redis: {
    host: '127.0.0.1',
    port: 6379,
    connectTimeout: 1000 * 3
  },

  session: {
    key: '',
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

  queue: {
    syncBlock: true
  },

  topic: {
    address: 'f62dbcc26f79dbbd0bc24640971ae8390f417a62'
  },

  settings: {
    'site.name': 'BOX 定投',
    'site.title': 'PRESS.one 写作站 | 飞贴',
    'site.shortTitle': 'PRESS.one 写作站',
    'site.slogan': '基于区块链的分布式数字内容交易及分发网络',
    'reader.url': 'https://xue.prsdev.club',
    'reader.rulePostUrl': 'https://xue.prsdev.club/posts/2517ef4198d224d4396e98df12c86a5af117a84275f1d69e4ab471fb8384f220',
    'wallet.currencies': ['CNB', 'PRS', 'BOX', 'BTC', 'EOS', 'ETH'],
    'auth.providers': ['pressone'],
    'permission.isPrivate': false,
    'permission.denyText': '您需要加入【BOX 定投践行群】才能阅读内容',
    'permission.denyActionText': '如何加入？',
    'permission.denyActionLink': 'https://support.exinone.com/hc/zh-cn/articles/360032511651-关于加入-BOX-定投践行群-的说明'
  },

  auth: {
    tokenKey: '',
    whitelist: {
      mixin: [1095057],
      github: []
    },
    permissionDenyUrl: `http://localhost:4000/permissionDeny`,
    boxGroupToken: 'e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855',
    xueUserExtraApi: 'https://dev.prsdev.club/hub/api/users-extra',
    xueAdminToken: '06d60bd1df9d5bd240b19c37313f822fd996b61912099e4d843fc0a29caf5895b997e93bbdbe1835359acb8a45f67e07c04d953794784f8ff7a2fd1a4b0103cd'
  }
};