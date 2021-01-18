Function.prototype.myCall=function(){
    arguments[0].this=this;
    arguments[0].this();
}
var obj={"name":"li"}
function fn(){
    console.log(this)
}

fn.myCall(obj)


Function.prototype.maCall=function(obj,...arg){
    obj=obj||window;
    var res=null;
    console.log(arg);
    obj.$fn=this;
    res=obj.$fn(...arg);
    delete obj.$fn
    return res
}
var obj={"name":"li"}
function fn(){
    console.log(this)
}

fn.myCall(obj,1,2)






Function.prototype.myCall=function(obj,...ary){
    var res=null;
    if(obj){
        obj.this=this;
        res=obj.this(...ary);
        delete obj.this;
    }else{
        res=this(...ary);
        delete obj.this;
    }
    return res;
}
var obj={name:"li"};
function fn(){
    console.log(this);
    console.log(arguments);
}
fn.myCall(obj,1,2,3);


Function.prototype.myCall=function(obj,...ary){
    var res=null;
    if(obj){
        obj.this=this;
        res=obj.this(...ary);
        delete obj.this.
    }else{
        res=this(...ary)
        delete obj.this.
    }
}
