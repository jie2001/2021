
function fn(){
    this=100;
    console.log(this)
}

var obj={name:"li",fn:fn}
obj.fn()//报错 因为this不能手动更改


var name="window"
function fn(x,y){
    console.log(this.name)
}
var obj={name:"li",fn:fn}
/* 
第一个参数；更改的this指向
从第二个参数开始就是函数执行所需要的正常参数
call/bind/apply这三个方法是存在Function的原型上的，只要是函数都可以去用（object基类也可以）
*/
// var res=fn.call(obj,1,2);
/* 
执行过程；
1.通过原型链找到Function.prototype上的call方法  fn是一个函数 函数有个基类是Function 在Function的实例里面找到的
2.找到之后，让fn这个方法执行
3.执行的时候，内部需要把fn函数里面的this进行改变 改成第一个参数
*/


function fn(){
    console.log(this);
}
fn.call();

/* 
在非严格模式下，不传或者null、undefined ===>this都是undefined
在严格模式下；不传或者undefined this===》undefined 传的null===》null
*/
