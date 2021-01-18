const http = require('http');
const fs = require('./promiseFs');
const url = require('url');
const mime = require('mime');
let server = http.createServer((req, res) => {
  // console.log(req.url); // 客户端发送的资源路径(只包含资源路径和参数)
  // 客户端的意图就是想请求index.html文件
  // '/index.html?name=1&age=2'

  // 'https://www.baidu.com/user/list'
  // 'https://www.baidu.com/index.html'
  let {
    pathname, // '/index.html'
    query
  } = url.parse(req.url, true);
  // console.log(pathname,query);
  let suffixReg = /\.([a-z0-9A-Z]+)$/;
  let suffix = suffixReg.exec(pathname) && suffixReg.exec(pathname)[1]; // 'html'

  // 如果当前的suffix的值为null，说明你这次发送的是数据请求，咱们就不要在static里读取静态资源文件了



  console.log(suffix, 25);
  let encoding = 'charset=utf8';
  // 如果当前客户端请求的资源是富媒体资源，那咱们就把不需要utf8格式转码，
  /^(jpg|png|jpeg|gif|mp3|mp4)$/i.test(suffix) ? encoding = '' : null;
  if (suffix) {
    // 介绍一个第三方的模块mime，他可以通过文件的后缀名获取到对应的mime格式内容 
    // mime.getType('后缀名');可以通过后缀名找到指定的mime类型然后进行返回
    suffix = mime.getType(suffix); // 'text/html'
    console.log(27);
    fs.readFile(`./static${pathname}`).then((result) => {
      // 服务端给客户端返回的数据一般都是字符串或者BUFFER流的格式
      res.writeHead(200, {
        // 服务端返回的content-type类型叫做mime类型，每一种数据格式都会对应有一种mime类型
        'content-type': `${suffix};${encoding}`
        //  'content-type':`text/html;charset=utf8`
      });

      res.end(result);
      // console.log(res);

    }).catch((err) => {
      console.log(39);
      res.writeHead(404, {
        'content-type': 'application/json'
      });
      res.end(JSON.stringify(err))
    })
  }
  else {
    // 这里处理的是数据请求
  }

});
// console.log(mime.getType('js'),47); // 'text/html'
// console.log(mime.getExtension('text/html'),48); // 'html'

server.listen(8888, () => {
  console.log('当前的8888端口已经启动成功');
});
