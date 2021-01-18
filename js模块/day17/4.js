// 原型继承
function A(){
    this.a="a"
}
A.prototype.getA=function(){
    console.log(this.a)
}
function B(){
    this.b="b"
}
B.prototype=new A();
var b=new B();
console.log(b)


// 原型继承
function A(){
    this.a="a"
}
A.prototype.getA=function(){
    console.log(this.a)
}
function B(){
    this.b="b"
}
A.prototype=new B();
var b=new B();
console.log(b)