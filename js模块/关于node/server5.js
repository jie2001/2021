// express分析
const express = require('express');
const app = express();
const fs = require('./promiseFs');


app.listen(8080, () => {
	console.log('SERVER SUCCESSFULLY！PORT：8080！');
});

// 'http:127.0.0.1:8080/list?lx=dev'
// 当get请求发送过来之后，如果他携带的参数lx是dev的话我就给你返回data.json中的dev属性值，如果lx的值是pro的话，我就给你返回data.json中的pro的属性值
app.get('/list',(req,res)=>{

  let {lx='pro'} = req.query; // 先获取到客户端传递的参数lx的值
  fs.readFile('./list.json').then((result)=>{
    console.log(result);
    result = JSON.parse(result); // 把当前读取的数据转换成对象格式
    let data = result[lx];
    // {ss:100,rr:200}
    res.status(200);
    res.send(data);
  });

})


app.use(express.static('./static'));

app.use((req,res)=>{
    res.status(404);
    res.send('not found!!!!')
});
