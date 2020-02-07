const {
  main
} = require('./src');

const start = async () => {
  try {
    await main();
  } catch (err) {
    if (!err.message) {
      console.log('已退出程序');
      return;
    }
    console.log(`程序停止了，因为：${err.message}`);
  }
};

start();