const ip = require('ip');

const comment = {
  debug: '是否在终端打印日志',
  sequelizeLogging: '是否在终端打印数据库日志',
  serviceRoot: '服务的访问地址',
  serviceKey: '服务的名称',
  queuePort: '队列服务端口',
  testPort: '测试服务端口',
  logo: '站点 logo',
  favicon: '站点 favicon',
  staticCDN: '静态资源 CDN',
  db: '数据库',
  provider: '支持的登录方式',
  atom: '同步服务',
  topic: '要同步哪个 topic 下的用户和文章',
  authorsUrl: '同步服务提供的 API，返回该 topic 下的用户列表',
  postsUrl: '同步服务提供的 API，返回该 topic 下的文章列表',
  settings: '前后端共用的配置',
  'site.name': '站点名称',
  'site.title': '站点标题（浏览器 tab 显示的文案）',
  'site.slogan': '一句话介绍本站点',
  'author.page.enabled': '是否开放作者详情页（取决于你是否提供关注作者的功能）',
  'subscriptions.enabled': '是否提供关注作者的功能',
  'filter.enabled': '是否开启文章筛选器',
  'filter.type': '筛选器默认类型',
  'filter.popularity.enabled': '是否开启热门排序',
  'filter.dayRangeOptions': '热门排序时间段',
  'wallet.currencies': '支持的货币类型',
  'pub.site.url': '写作站的访问地址',
  'menu.links': '自定义菜单',
  'permission.isPrivate': '选择公开或者私密，私密需要登录（通过校验）才能发布、查看文章',
  'permission.denyText': '没有权限，被拦截之后，提示用户的文案',
  'permission.denyActionText': '引导被拦截用户的文章',
  'permission.denyActionLink': '引导被拦截用户的链接，比如【如何付费加入？】这类型的引导文章',
  auth: '权限认证',
  whitelist: '如果站点是私密的，把用户的 providerId 放入白名单，则该用户不需要通过校验就能访问私密',
  bot: '机器人转发，把日志发送给机器人，比如 telegram、slack 机器人',
  encryption: '加密相关的 key',
  aes256Cbc: '加密文章的 key，访问加密过的文章，如果没有这对 key 解密，是看不到原文的'
};

exports.getVariableString = (port, serviceKey) => {
  const map = {
    serviceRoot: getServiceRoot(port),
    serviceKey
  };
  let string = '';
  for (const key in map) {
    string += `const ${key} = "${map[key]}";\n`;
  }
  return `${string}\n`;
};

exports.getConfigString = (config, level = 1) => {
  const isArray = !!config && config.constructor === Array;
  if (isArray) {
    const array = config.map(item => {
      return typeof item === 'string' ? `'${item}'` : item;
    });
    return `[${array}]`;
  }
  let string = '{';
  string += level === 1 ? '\n\n' : '\n';
  const keyIndent = '  '.repeat(level);
  for (const key in config) {
    if (comment[key]) {
      string += `${keyIndent}// ${comment[key]} \n`;
    }
    if (typeof config[key] === 'object') {
      string += `${keyIndent}'${key}': ${exports.getConfigString(
        config[key],
        level + 1
      )},`;
    } else {
      string += `${keyIndent}'${key}': ${format(config[key])},`;
    }
    string += level === 1 ? '\n\n' : '\n';
  }
  const closeBracketIndent = '  '.repeat(level - 1);
  return `${string}${closeBracketIndent}}`;
};

const getServiceRoot = port => `http://localhost:${port}`;

const format = item => {
  if (typeof item === 'string') {
    item = `\`${item}\``;
    item = item.replace(/\r/g, '\\r').replace(/\n/g, '\\n');
  }
  return item;
}