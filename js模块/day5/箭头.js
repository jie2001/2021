//箭头函数
var res=function(x,y){
    return x+y;
}
console.log(res(1,2));
// 可以省去function
var res=(x,y)=>{
    return x+y;
}
// 如果形参只有一个的话 小括号也可以省去
console.log(res(1,2));
var res=x=>{
    return x+1;
}
// 如果执行体里面只有return了一句代码 函数体的{}也可以省去
// 如果有多条语句的话 便不能去掉{}
var res=x=>x+1;


// 简写求和
var res=(x,y)=>x+y;