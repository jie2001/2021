// 在介绍一个内置模块：http/https

// 服务端做的事
// 1.后端代码(上传到服务器)
// 2.启动一个服务(IIS,APACHE,NGINX,NODE/http,https)
// 3.接收客户端的请求
// 4.处理请求
// 5.响应给客户端内容

const http = require('http');

let server = http.createServer((req,res)=>{
  // 当客户端往 服务端发送请求的时候，次函数就会执行，而且是你请求几次，函数就会执行几次
  // req(request)客户端给服务端的信息
  // res(response)这里边是一些属性和方法 供咱们给客户端返回内容
//   console.log(11111);
res.write('1');// write中的内容就是响应体内容 而且write可以执行多次
res.write('2')
res.end('3')// 在响应的最后一定要写是哪个end才代表结束
//   res.end('hello world');
}); // 创建你一个服务
// 0-65535

// server.listen指定当前服务的端口号，
// 第一个参数是端口号，第二个参数是一个函数，他的作用就是当服务启动成功以后就会执行此函数
server.listen(8888,()=>{
  console.log('当前的8888端口已经启动成功');
});
// 当前同一个端口的服务同时只能启动一次，如果启动了两次就会报错
// listen EADDRINUSE: address already in use :::8888
