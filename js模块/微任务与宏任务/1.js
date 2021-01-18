setTimeout(() => {
    console.log(1);
  }, 40);
  console.log(2);
  for (let i = 0; i < 1000000000; i++) { };
  // 这个要持续70ms左右

  setTimeout(() => {
    console.log(3);
  }, 20);
  console.log(4);


  console.log(1);
  async function fn1() {
    console.log(2);
    await console.log(300);
    console.log(3);
  };
  fn1();
  console.log(66)



  function fun1() {
    console.log('func1 start');
    return new Promise(resolve => {
      resolve(); // 微1
    });
  };

  function fun2() {
    console.log('func2 start');
    return new Promise(resolve => {
      setTimeout(() => { // 宏2
        resolve();
      }, 10);
    })
  };

  console.log(1);
  setTimeout(async () => {
    console.log(2);
    await fun1();
    console.log(3); 
  }, 20); // 宏1
  for (let i = 0; i < 100000000; i++) { };
  console.log(4);
  fun1().then(() => { 
    console.log(5);
  });
  fun2().then(() => {
    console.log(6);
  });
  setTimeout(() => {
    console.log(7);
  }, 0); // 宏3
  console.log(8);
// 14 f1 f2 852 f1 376u
