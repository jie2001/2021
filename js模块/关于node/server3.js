// express是一款专门为node开发设计的框架，他的出现让node写起来边的更加的简单

// 'name=1$age=2'
// qs.parse('name=1$age=2') // {name:1,age:2}
// qs.stringify({name:1,age:2}) // 'name=1$age=2'
const express = require('express');
const app = express(); // 就相当于http.createServer(
app.listen(8888,()=>{
  console.log('当前8888端口服务已经启动成功');
});
// '/indx.html'
app.use(express.static('./static'));
app.use((req, res, next) => {
	res.status(301);
  // res.send('NOT FOUND!11111');
  res.redirect('https://www.baidu.com')
});
