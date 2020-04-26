const {
  prompt
} = require('enquirer');
const Joi = require('joi');
const {
  attempt
} = require('./validator');
const {
  sleep
} = require('./utils');

exports.mixin = async (type, homeUrl, callbackUrl) => {
  const siteName = type === 'pub' ? '写作站' : '阅读站';
  console.log('\n--------------------------------------------------------');
  console.log(`（步骤 ${type === 'pub' ? 1 : 2}/2）请创建${type === 'pub' ? '' : '另外'}一个 Mixin 的 App，给【${siteName}】使用`);
  console.log('--------------------------------------------------------');
  console.log('\n  - 创建 Mixin app 之前，手机需要先安装 Mixin，还没有安装？前往下载：https://mixin.one/messenger');
  console.log('  - 打开 Mixin 开发者后台，使用 Mixin 扫码登录：https://developers.mixin.one/dashboard');
  console.log('  - 创建 Mixin App');
  console.log(`  - 备注1：The home uri 填写 ${homeUrl}`);
  console.log(`  - 备注2：The OAuth redirect uri 填写 ${callbackUrl}`);
  await sleep(5000);
  console.log('\n已经创建好了？把 App 的信息告诉我一下\n');
  const answers = await prompt([{
      type: 'input',
      name: 'id',
      message: '请输入 Mixin ID'
    }, {
      type: 'input',
      name: 'secret',
      message: '请输入 secret（应用密钥）'
    },
    {
      type: 'input',
      name: 'pin',
      message: '请输入 pin（在生成的应用 Session 中）'
    },
    {
      type: 'input',
      name: 'client_id',
      message: '请输入 client_id（在生成的应用 Session 中）'
    },
    {
      type: 'input',
      name: 'session_id',
      message: '请输入 session_id（在生成的应用 Session 中）'
    },
    {
      type: 'input',
      name: 'pin_token',
      message: '请输入 pin_token（在生成的应用 Session 中）'
    },
    {
      type: 'password',
      name: 'private_key',
      message: '请输入 private_key（在生成的应用 Session 中）'
    }
  ]);
  attempt(answers, {
    id: Joi.string().trim(),
    secret: Joi.string().trim(),
    pin: Joi.string().trim(),
    client_id: Joi.string().trim(),
    session_id: Joi.string().trim(),
    pin_token: Joi.string().trim(),
    private_key: Joi.string().trim()
  });
  const mixin = {
    id: Number(answers.id),
    clientSecret: answers.secret,
    pinCode: answers.pin,
    clientId: answers.client_id,
    sessionId: answers.session_id,
    pinToken: answers.pin_token,
    privateKey: answers.private_key.replace(/\\r/g, '\r').replace(/\\n/g, '\n')
  };
  return mixin;
};