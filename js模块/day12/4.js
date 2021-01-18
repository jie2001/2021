// 只对等号左边的做变量提升
console.log(fn);
console.log(fn(1,2));
var fn=function (n,m){
    return n+m;
 }
console.log(fn(3,4));



// 函数里面的return return下面的代码本身不执行 但是可以进行变量提升(f2进行变量提升)，return后面的代码不进行变量提升(f1不进行变量提升)
function fn(){
    console.log(a);
    return function f1(){
    }
    var a=3;
 }
 fn();



