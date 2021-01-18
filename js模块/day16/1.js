function Fn(name,age){
    this.name=name;
    this.age=age;
}
//往原型上括展公有属性、方法
Fn.prototype.sayFn=function(){
    //谁调用这个函数，这个函数里面的this就是谁
    alert("我的名字"+this.name+"年龄"+this.age)
}
var f1=new Fn("li",18);//{name;"li",age;18}
var f2=new Fn("li2",20);//{name;"li",age;18}
f1.sayFn();
f2.sayFn();

