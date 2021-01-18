const fs = require('fs');
const path = require('path');
const obj = {}

function handleSuffix(pathname) {
  let encoding = 'utf8';
  let suffixReg = /\.([a-zA-Z0-9]+)$/;
  let suffix = suffixReg.exec(pathname) && suffixReg.exec(pathname)[1];

  if (/^(png|jpg|jpeg|gif|svg|mp3|mp4)$/i.test(suffix)) {
    // 如果当前的if成立，那就说明当前读取的文件是富媒体资源
    encoding = null;
  };
  return encoding;
}

// function readFile(pathname) {
//   // let encoding = 'utf8';
//   // './apple.jpg'
//   // 'C:/Users/1/Desktop/day31/apple.jpg'
//   pathname = path.resolve(pathname); // 把当前的路径装成根路径

//   // 'png jpg jpeg gif svg mp3 mp4 mkv rmvb avi'
//   // let suffixReg = /\.([a-zA-Z0-9]+)$/; // 捕获后缀的正则

//   // let suffix = suffixReg.exec(pathname) && suffixReg.exec(pathname)[1]; // 获取后缀

//   // if(/^(png|jpg|jpeg|gif|svg|mp3|mp4)$/i.test(suffix)){
//   //   // 如果当前的if成立，那就说明当前读取的文件是富媒体资源
//   //   encoding = null;
//   // }
//   // console.log(suffixReg.exec(pathname),8);



//   let resEncoding = handleSuffix(pathname); //'utf8' null
//   return new Promise((resolve, reject) => {
//     fs.readFile(pathname, resEncoding, (err, res) => {
//       if (err !== null) {
//         reject(err);
//         return;
//       }
//       resolve(res);
//     })
//   })
// }

//--------------------------------------------
// 利用数组和forEach往obj里新增方法
['readFile', 'readdir', 'mkdir', 'rmdir', 'unlink'].forEach(item=>{
  
  // obj.readFile = function(pathname){}
  obj[item] = function(pathname){
    return new Promise((resolve,reject)=>{
      pathname = path.resolve(pathname);
      let resSuffix = handleSuffix(pathname);
     
      function callback(err,res){
        if(err !==null){
          reject(err);
          return;
        }
        resolve(res);
      }
      // 如果当前是readFile的话，那函数执行的时候传递三个参数
      // 如果不是readFile，那函数执行的时候只需要传递两个参数，第一个是路径 ，第二个是回调函数
      //------------------------------------
      // 第一种解决办法
      // if(item == 'readFile'){
      //   fs[item](pathname,resSuffix,callback);
      // }
      // else {
      //   fs[item](pathname,callback);
      // }
      //------------------------------------------
      // 第二种解决办法
      // 'readdir'
      if(item !== 'readFile'){
        // 如果当前不是readFile的话，把就把resSuffix的值变成回调函数放到第二个形参的位置
        resSuffix = callback;
        callback = null;
      }
       // fs.readFile(pathname,resSuffix,()=>{})
      fs[item](pathname,resSuffix,callback);
  
      
     
    })
  }
});



module.exports = obj;
