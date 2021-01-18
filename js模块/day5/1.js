// 可以省去function
var res=(x,y)=>{
    return x+y;
}
console.log(res(1,2));
// 如果形参只有一个 小括号也可省去
var res=x=>{
    return x+1;
}
// 如果执行体里面只return了一句代码 函数体的{}也可以省去
var res=x=>x+1;
var res=(x,y)=>x+y;
