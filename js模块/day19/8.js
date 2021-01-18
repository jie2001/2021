// let是一个变量 可以更改 不会报错、
let a;
a=3;
console.log(a)

//const是一个常量 可以用但是不能更改 否则会报错   必须在声明的时候加一个初始值  有暂时性死区
const b;
b=5;
console.log(b)




var ary=[1,2,3]
var a=1;
var b=2;
var c=3;
var [a,b,c]=[1,2,3]
console.log(a,b,c)//adc代表123每个字母对应每个数字



var [,,a,b]=[1,2,3,4]
console.log(a,b)



// 结构左右一一对应
var [,[,a]]=[1,[2,3],4];
console.log(a);

//默认值：如果那个值绝对等于undefined，那就走默认值
var [a,b,c=10]=[1,2,null];
console.log(c);







var name=obj.name;
var age=obj.age
//对象的解构赋值跟属性名有关(跟顺序无关)
let {age,name}={name:"li",age:10}
console.log(name,age)

//如果没有对应的项，值就是undefined
let {age,name}={name:"li"}
console.log(name,age)

//用符号可以设置默认值，只要是绝对等于undefined 就走默认值
let{age=100,name}={name:"li",age:"200"};
console.log(name,age)

//可以起别名
let{age:a,name}={name:"li",age:"10"};
console.log(a)




function fn([x,y]){
    console.log(x,y)
}
var ary=[1,2];
fn(ary)



//设置参数默认值
function fn(x=20,y=10){
   console.log(x,y)
}
fn(1);


function fn({age:a}){
   console.log(a)
}
fn({name:"li",age:10})