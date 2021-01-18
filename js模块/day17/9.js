var obj={
    name:"li"
}
function fn(x,y){
    console.log(this,x,y)
}
fn.apply(obj,[1,2])
/* 
apply和call这个方法相同.就是第二个参数是以数组（类数组）形式进行传参的，与call一样 只是除了第一个值代表的是指向以外
*/


//============》bind  通过bind
var obj={
    name:"li"
}
function fn(x,y){
    console.log(this,x,y)
}
var res=fn.bind(obj,1,2)
console.log(res())