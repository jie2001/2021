var a=1;
var a=1;


function fn(x){
    var num=2;
    return function(){
        console.log(num);
    }
} 
var f=fn();

function fn(){
    return function(){
        console.log(1);
    }
}
fn()();

function fn(x){
    return function(y){
        return x+y;
    }
}
var f=fn(1);

var utils=(function(){
    var num=0;
    function fn1(){
        console.log(1)
    }
    return {
        fn1:fn1
    }
})();


function fn(x){
    return function(y){
        return x+y;
    }
}
var f=fn(1);

var obj={"name":"lili"}
"name" in obj//如果返回的是turn 那么就是代表包含 如果是false的话那么就代表不包含