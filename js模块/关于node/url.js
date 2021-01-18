// url模块也是node里的内置模块，他是专门用来处理url的
let url = require('url');
 
// 当前url.parse的传递的url可以写一部分
// 当前url.parse的传递的第二个参数是true，他可以把query里的参数转换成对象格式的
let res = url.parse('http://www.baidu.com:8080/uesr/list?name=1&age=2#index',true);
console.log(res.query);
// {
//   protocol: 'http:', // 协议
//   slashes: true, // 协议后边的斜杠
//   auth: null, // 
//   host: 'www.baidu.com:8080', // 域名+端口号
//   port: 8080, // 端口号
//   hostname: 'www.baidu.com', // 域名
//   hash: '#index', // 哈希值
//   search: '?name=1&age=2', // 问号传参部分
//   query: 'name=1&age=2', // 传参部分
//   pathname: '/uesr/list', // 资源路径
//   path: '/uesr/list?name=1&age=2', // 资源路径加参数
//   href: 'http://www.baidu.com/uesr/list?name=1&age=2#index'
// }
