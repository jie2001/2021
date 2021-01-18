var obox=document.getElementById("box");
console.log(obox);
/* 
 null 和undefined 的一个区别
 null 是意料之中的没有，undefined 是意料之外的没有
 null 指的是null对象指针
*/ 
// 声明变量的时候 我不知道这个数据类型是什么 我可以先写一个null

undefined
只声明 没定义 undefined
var name;
console.log(name)
// 想要获取对象中的属性值，里面没有对应属性 那这个值计算undefined
var obj={name:"lili"};
console.log(obj.name)
console.log(obj.age)
// 函数里面设置形参 在调用的时候 没有传送参 在函数中打印形参 undefined
function fn (x,y){
    console.log(x,y)
}
function fn (x,y){
    console.log(x,y)
 }
 fn();
 // 函数没有return 返回值，函数的返回结果就是undefined
 function fn(x,y){
   var total= x+y;
 }
 var res=fn(1,2);
 console.log(res);
 