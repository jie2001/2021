function fn(){
    this.x=100
}
fn.prototype.getX=function(){
    return this.x;
}
var f1=new fn();
console.log(fn.prototype.constructor)
/* 
原型重定向
手动重定向的原型是没有constructor的，我们需要自己手动添加一个

*/