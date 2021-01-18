//1.在全局作用域下 this指的就是window（use strict）严格模式
console.log(this)
// 2.函数执行的时候，看看前面有没有点 如果有点的话 前面是谁 函数执行的时候 里面的this就是谁，如果没有点 里面的this就是window(非严格模式中) 在严格模式中(undefined)
// 例子
console.log(this);
function fn(){
    console.log(this);
}
var obj={
    "name":"li",
    fn:fn
}
obj.fn();
// 3.给元素绑定事件 当事件触发，函数执行的时候 里面的this就是当前绑定元素


// 4.自执行函数中的this 非严格模式中的是window 严格模式中的是undefined
;(function(){
    console.log(this);  
})();


// 5.回调函数里面的this是window 不管是严格模式下或者非严格模式下都是window    把一个函数当成参数传给另一个函数
function fn(callback){
    console.log("下午好");
    callback();
}
fn(function(){
    alert(1);
})


// 6.通过类创造的实例，构造函数(类)中的this指的就是当前的实例
function fn(){
    this.x=100;
    this.name="li"
}
var f1=new fn();
var f2=new fn();

//7.通过call、apply、bind可以更改this的指向.
function fn(){
    console.log(this);
}
var obj={
    name="li",
    fn:fn
}
// fn();






function Fn(){
    this.age=18;
    this.name="lili"
    return
}


var arr=[1,2,3,4,5]
arr[arr.length]=8
console.log(arr)


var arr=[1,2,3,4,5];
arr.push(1);
console.log(arr)