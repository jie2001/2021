// 对象
// 属性名 一般是数字或者字符
// 属性值 可以为任何数据类型

var obj={name}
// 注意 如果属性名是数字的话 不能用第一种（会报语法错误），要用第二种
console.log(obj.name);
console.log(obj["name"]);
// console.log(obj.100);// 会有语法错误 数学属性名队员的属性值不能这样获取

// 练习题
var name="zhufengpeixun";
console.log(obj.name);//"lili"
console.log(boj["name"]);//lili
console.log(obj[name]);//obj [zhufengpeixun];undefined
// 如果里面没有 我直接赋值就是添加 如果原来有 又赋值 有更改
var obj={name:"li",age:1,100:"he"};
// 更改
obj.age=100;
//===>添加
obj.job="前端开发工程师"

//===>删除  属性名还在，只是值变成了null
obj.name=null;
// 彻底的删除
 delete obj.age;
 console.log(obj);
 
 var obj={name:"li"}
 obj.name
undefined
