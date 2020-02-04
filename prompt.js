const {
  prompt
} = require('enquirer');
const open = require('open');
const Joi = require('joi');
const {
  attempt
} = require('./validator');

const sleep = (duration) =>
  new Promise((resolve) => {
    setTimeout(resolve, duration);
  });

exports.mixin = async (type, homeUrl, callbackUrl) => {
  console.log(` ------------- type ---------------`, type);
  const siteName = type === 'pub' ? '写作站' : '阅读站';
  console.log(`请为${siteName}创建一个 Mixin 的 App`);
  console.log(`备注1：The home uri 填写 ${homeUrl}`)
  console.log(`备注2：The OAuth redirect uri 填写 ${callbackUrl}`);
  await sleep(5000);
  console.log('即将打开创建页面...');
  await sleep(2000);
  // await sleep(5000);
  // await open('https://developers.mixin.one/dashboard');
  await sleep(2000);
  console.log('已经创建好了？把 App 的信息告诉我一下');
  const answers = await prompt([{
      type: 'input',
      name: 'secret',
      message: '请输入 secret'
    },
    {
      type: 'input',
      name: 'pin',
      message: '请输入 pin'
    },
    {
      type: 'input',
      name: 'client_id',
      message: '请输入 client_id'
    },
    {
      type: 'input',
      name: 'session_id',
      message: '请输入 session_id'
    },
    {
      type: 'input',
      name: 'pin_token',
      message: '请输入 pin_token'
    },
    {
      type: 'password',
      name: 'private_key',
      message: '请输入 private_key'
    }
  ]);
  if (type === 'pub') {
    answers.secret = 'cf94512e54514b68d23ed1befd12548444a7bf7bb2b1064e732842ea8b658b0b';
    answers.pin = '339125';
    answers.client_id = '73542b48-ebaa-48da-9587-302cc4095c37';
    answers.session_id = '54288ffd-5161-4950-bf66-bf46c7dc1a29';
    answers.pin_token = 'z42L6uSFOdCU6X/aC0WmDv+0IVpd1Ja+J0w6kk1i2AjBsk7ujxZVkZB1vT0a1T6TzPTlFOuU9yhPhWKHk477yxWZrHlgvKkKk2LMZSnYTzpB+aVIkPG65MjLOplRV4sD7WMSh8vbFppRE0L2sQvOeM3jLU/WlNDkwaWDhdtpn5A=';
    answers.private_key = '-----BEGIN RSA PRIVATE KEY-----\r\nMIICXQIBAAKBgQDoW2Fz+cP4BGizSsyoJdoIg2bUfz7fNQRx3CusTz8qIGhaCuTS\r\nJU2EpAezHTDmzMiVNUay5vP/TH2zoOPD76mz4NmVsuwXEWVPImJMc/QZ8kHHQ1gN\r\npQrrfOd7oahvZiTbAyKxqmW+sBwc9D+HHJrG2O1kbGzkqej0A9L46NhdGwIDAQAB\r\nAoGBAIwAg3edxrZp8awWJborFHSMuCjRgtB64XK5dpccKLL5U+btKXJ1h3+kVf9W\r\nV2C5gyJkN3UUM3BgZl0VVCd7AIR7jv9FphbjmHaPdXSttP8oCBJMeEXixs2+jXID\r\nIElUIPopKI+N3hZsag/i1yZIxeHmF/N6Q9fcHl62nlrbNiwBAkEA/hIGk4C7aqO3\r\n0sqiUeAYImDaYQp0BMBbHn3wJZhuIRJzi/jMhV6LD9begEonIKBNdOGyzAb9A+Mg\r\nSdsX4sBZ2QJBAOofI4bnpXFXNE2lvqaUVq45Vo2XwAmYquNsImec/nDHNnC3AxSM\r\n+4uFlEGAT5iHRGl6uWRK0XN3i8+QCboOAhMCQDU3U1dL7HWOqy8ksFET7hotTTBs\r\nPxbLr4o4eLd3MQIOWlNkHnqE7f24VMxsO7vSt8aWi5u+jvpkdVvi3yLohSkCQGXL\r\nWjga2h1YrD4ila16C+I+vfpcg7vobEzrxF3Grf69L1d8y1MRJYH5d4evUWxhTAaM\r\nvLT1rvIEhX6fAwupcY8CQQDg+rRXCMrgGQv4LF1jmdR2ZsS/8sGvDbtBFUk9TrmX\r\n83qHKq2OpvbqTR3wBSu+VecFktsSRF6xrDqOs7855SWB\r\n-----END RSA PRIVATE KEY-----\r\n';
  }
  if (type === 'posts') {
    answers.secret = '5c01a9d07ec45d6bff2a5360cb97a07a457a5f75d6fefc163e8d9f4d0451cdd6';
    answers.pin = '851623';
    answers.client_id = '44931a6d-2029-4c8d-888f-cbb3afe509bb';
    answers.session_id = 'd8af6036-1424-4cc2-8939-e8959e0675d0';
    answers.pin_token = 'W7NAyQL7PR+tmpSnOOl/uz1Vi2YLh9SrNRRojloecBulFn6EAvlz0pkfZEmqjzLV+g+FYP31QdUW1of3wVELYsF6AMizWHteLU9ttI7aLTDlIclIxFgeTGydiz2HTxKA2IYykBInXdereqWBds7B1drpr4Uyu0/1XaafvAOo7+4=';
    answers.private_key = '-----BEGIN RSA PRIVATE KEY-----\r\nMIICWwIBAAKBgQCLQQgvIzUKOYSShEFkHOuUo/uG7ocnOjTsvbyZlWdoZVkK6TZE\r\nEabLT7OpBoaTKiTQMa2C/LsC0h2lgruEreTMjyex2qB0ZHESlQ0PJliqJFUUo5U+\r\nBtbVzGj4A2sORWQ12yI339LJy8xcMspUzOvRWj/+lV0RCcAoDsbn5+fhUwIDAQAB\r\nAoGAGzd9qwDdl/7/60cQJMoGPUoDmi66ma8lsvOujfIGgP/19Ez6fzlX+Tq9qZaN\r\n7Ot6wHpFKGnO/1Ej3Dp9/gOiyRBdoG7g9YamX9c4ySdKYgxALvvtKrtqHvl+GVDy\r\nFevSe5u41IV+AhVcjaqzCwREWitNfGfgkLWlRcXYQ6aX2XECQQDwz68C8fpRy3yP\r\nnR/FxClchykKejlSr9k44n4sz8qeT15a9Q/7UGNKODxJAee5Jl3l/w7JkSuGbR5j\r\neplmN/3LAkEAlAmHwknrYYiJYNIJ4IoVZz9lVIz8LZcABYYPX01m1GvkWPmlrX9Z\r\n3h7tLw9cpICM+6pUFAvW/7y8Lme3rO05mQJAA+FU0JdVkTvWJfpCKM2gXP1Qi/qs\r\nMcjjlycPIWm3uhVNT+ni+Amzj96YGhUNxs33dV1Gv7i3GtNnSfMPxbXhQQJAQAm3\r\nXoaXegOUWfvCJg3VoGo+LUsns5kEe184uyNCflWF3C9yShEzEPET7S2aB9dMJXnT\r\nETDl+o7sYK6hN/8O0QJACXmEdbROaNVq1B/9MYPkeC/z9h9YVu8DvqUw5muMpOVd\r\nye6n7ljFQl3ql6yF0yk5n3idyGPZ5ySb1Lhz9yhkKw==\r\n-----END RSA PRIVATE KEY-----\r\n';
  }
  attempt(answers, {
    secret: Joi.string().trim(),
    pin: Joi.string().trim(),
    client_id: Joi.string().trim(),
    session_id: Joi.string().trim(),
    pin_token: Joi.string().trim(),
    private_key: Joi.string().trim(),
  });
  const mixin = {
    clientSecret: answers.secret,
    pinCode: answers.pin,
    clientId: answers.client_id,
    sessionId: answers.session_id,
    pinToken: answers.pin_token,
    privateKey: answers.private_key.replace(/\\r/g, '\r').replace(/\\n/g, '\n'),
  };
  return mixin;
};