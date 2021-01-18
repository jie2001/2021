new Promise(resolve => {
    console.log('promise1');
    resolve();
}).then(() => {
    console.log('then11');
    // return 
    new Promise(resolve => {
        console.log('promise2');
        resolve();
    }).then(() => {
        console.log('then21');
    }).then(() => {
        console.log('then22');           
    });
}).then(() => {
    console.log('then12');
})
async function fn(){
    return 10;
}
console.log(fn())
//想要用await 必须拿async修饰
//await后面一个放置一个Promise实例 (我们书写的不是 浏览器也会把起变为promise实例)，await中断函数体中 其下面的代码执行
// await表达式会暂停整个async函数执行进程并让出其控制权  只有等待await后面的Promise实例是成功态之后 才会把之前暂停的代码继续执行 如果后面promise实例是失败的 则下面的代码不执行
// await是异步微任务
// 函数体中遇到await，后面的代码该咋地咋地 但是下面的代码会暂停执行  把它们当做一个任务 放置在EvenQueue的微任务中