function fn(){
    // console.dir(arguments.sort)//undefined
    arguments.__proto__=Array.prototype;
    arguments.sort(function(a,b){
        return a-b;
    })
    return arguments;
}
fn(8,2,1,9)
// Arguments(4) [1, 2, 8, 9, callee: ƒ, Symbol(Symbol.iterator): ƒ]

//不属于这个类，但是想使用这个类的用法
function fn(){
    arguments.__proto__=Array.prototype;
    arguments.sort(function(a,b){
        return a-b;
    })
    return arguments
}
fn(8,2,3,2,4)



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

function fn(){
    arguments.__proto__=Array.prototype;
    arguments.sort(function(a,b){
        return a-b;
    })
    return arguments
}
fn(2,5,3,6,5)


function A(){
    this.a='a'
    this.x=100
}
function B(){
    this.b="b"
    this.y=200
}
var b=new B()
console.log(b)

