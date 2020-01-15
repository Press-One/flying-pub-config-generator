const ip = require('ip');

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