const {
  prompt
} = require('enquirer');
const open = require('open');

const sleep = (duration) =>
  new Promise((resolve) => {
    setTimeout(resolve, duration);
  });

exports.mixin = async () => {
  // console.log('请为写作站创建一个 Mixin 的 App，即将打开创建页面...');
  // await sleep(5000);
  // await open('https://developers.mixin.one/dashboard');
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
  answers.clientSecret = '426d371732355187fc15a8f2c6280b4ee5d149b00cf0689b945cbc3274ddfe01';
  answers.pinCode = '618818';
  answers.clientId = '73542b48-ebaa-48da-9587-302cc4095c37';
  answers.sessionId = '214ff834-595e-41c3-ad1b-e962ff668cef';
  answers.pinToken = 'h9Fs6wW2XUPng+8tJppvGieYPlREHo07C1GoY7RLKZYs6XO1ZxN4fX4+5GF0dAs4R4fBR3r/N9opS/G5Jmtmg8kD2mkR8i09rohdDPeCiz5dsylXSuIgGI0jOTIG6woHvkrGaZRcmFMpqJaXXsUpWg2hdzbsYE5r7bc5d7sfM3Y=';
  answers.privateKey = '-----BEGIN RSA PRIVATE KEY-----\r\nMIICXAIBAAKBgQCm387AE+fwehTJMJW2D/EOUqaMXHmXFM6nmgccw+xgW8qcUan0\r\nLRiOF6UgU8/awr4RKLVFpFDnN0Je5NVI6G16+qiFQhrK2qfamPHuooi92yDYG1R+\r\nCMV/ZzrU/LlhLA0L4FIAUdUMbmF8I4Jthip9RWgzn2CLlzJoLecxhlGqLQIDAQAB\r\nAoGAfEz/44GwZid5rjd7fSc4xxN3rdwAUjKUkLGiFKI4Q7p8HJ6T+ydQQB+Kx57G\r\nmEwxafSpultgTCqUTL0lxm4jhZpZDBQrF/DjZAlzYyUL2sX3VSmLytrS6txFWN/i\r\n5KiU0XvjRTDJU6wDJbGID68ikaHPAGspDbnfhm47o8CUmt0CQQD814s+nE2gQd3u\r\nFs7cOkseHkZKm771ThABJm2YlVOccyuWHoCSQXmSjlawzCSx7hRc3SizxggnplCc\r\nf9wq58XjAkEAqPViTSrNvDllojYkdI/SYB2uR+INRxclJZujJsPxJAw/woBkeT7W\r\nZo1wNuz2nIWHdq+KTE1Ez7Y1/CF0yfZMrwJAdaxHNPN/uTcOd7GLwrkqnrDOXAjS\r\nPc5/6lkdJqdQy35aabp2chsg3pF6TTwlU94PAg031Ts0LmfcGonzSNCnqwJAfPoN\r\nvaDkz87xE7zS2HmuFrS9vqRCSAyhyKDIXRthGtYIr7nDGEBX3UHP+IDtpjfLTQpp\r\n1SjutmpEonyo499RNwJBANnhNGto1jfzGEPw8rV2I256YMfNPo9qEDDZnEq37ZVP\r\nifi/02XWH12dhYjQBuVqvk9paqH3rGpneyDa3P8ehaY=\r\n-----END RSA PRIVATE KEY-----\r\n';
  return answers;
};