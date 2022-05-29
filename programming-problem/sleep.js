/**
 * 实现一个sleep函数，让程序暂停几秒执行
 */

function sleep(delay = 200) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve()
    }, delay);
  })
}


async function testSleep() {
  console.log(1);
  await sleep(2000);
  console.log(2);
}

testSleep()
