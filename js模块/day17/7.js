
/* 
寄生组合继承

*/
function A(){
    this.a="a"
    this=100
}
A.prototype.getA=function(){
    console.log("A")
}
function B(){
    A.call(this)
    this.b=200;
    this.y=300;
}
B.prototype=Object.create(A.prototype);
B.prototype.getA=100;


var b=new(B);
console.log(b)

//  创建一个空对象的——proto——指向的参值