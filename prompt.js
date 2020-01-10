const {
  prompt
} = require('enquirer');
const open = require('open');

const sleep = (duration) =>
  new Promise((resolve) => {
    setTimeout(resolve, duration);
  });

exports.mixin = async () => {
  console.log('请为写作站创建一个 Mixin 的 App，即将打开创建页面...');
  await sleep(5000);
  await open('https://developers.mixin.one/dashboard');
  await sleep(3000);
  console.log('已经创建好了？把 App 的信息告诉我一下');
  const answers = await prompt([{
      type: 'input',
      name: 'clientSecret',
      message: '请输入 secret'
    },
    {
      type: 'input',
      name: 'pinCode',
      message: '请输入 pin'
    },
    {
      type: 'input',
      name: 'clientId',
      message: '请输入 client_id'
    },
    {
      type: 'input',
      name: 'sessionId',
      message: '请输入 session_id'
    },
    {
      type: 'input',
      name: 'pinToken',
      message: '请输入 pin_token'
    },
    {
      type: 'password',
      name: 'privateKey',
      message: '请输入 private_key'
    }
  ]);
  return answers;
};