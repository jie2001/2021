// express分析
const express = require('express');
const { Http2ServerRequest } = require('http2');
const app = express();

// 跟原生的listen是一样的
app.listen(8080, () => {
	console.log('SERVER SUCCESSFULLY！PORT：8080！');
});


// 客户端发送的请求都会在static执行之后的函数里进行处理,按照请求的路径去static里去找到对应的资源进行返回，如果找不到会返回404和对应的文案
app.use(express.static('./static'));

app.use((req,res)=>{
  console.log(req.pathname);
    res.status(404);
    // res.send()
    res.redirect()
});

// request身上的属性和方法
  // req.path:代表请求的路径
  // req.query:代表请求的参数
  // req.body：在配合body-parser中间件的情况下，req.body存储的是请求主体传递过来的信息
  // req.method：请求类型
  // req.get：获取请求头的信息

  // response身上的属性和方法
  // res.end 类似于原生的end方法，结束当前的响应
  // res.send() 最常用的给客户端返回信息（可以传递对象//BUFFER/TXT等），基于SEND是通过响应主体返回给客户端信息
  res.json
  // res.type：返回content-type的类型值
  // res.set：设置响应头信息
  // res.status :设置当前请求返回的状态码
  // res.set('content-type','text/html');
  // res.set({
  //   ss:100,
  //   aa:200
  // })
  // res.type = 'text/html'
