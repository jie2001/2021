function Fn(x,y){
    var total=x+y;
    this.a=x;
    this.b=y;
    this.total=total;
    function fn(){
        return x+y;
    }
}
Fn(1,2);
var f1=new Fn(2,3);
var obj={};
obj.name="li"
Fn.age=100;
var f2=new Fn(4,5);
console.log(Fn)