function A(){
    this.a="a"
    this.x=100;
}
function B(){
    this.b="b"
    this.y=200
}
var b=new B();
console.log(b);


/* 
call继承；B类和A类 想要让B类的实例拥有A类的私有属性.我们可以让A当成普通函数执行 把里面的this指向进行更改成B类的实例（往b的实例上去添加属性）

*/
function A(){
    this.a="a"
}
A.prototype.getA=function(){
    return this.a;
}
function B(){
    this.b="b"
    A.call(this)
}

var b=new B()
