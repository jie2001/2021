Array.prototype=100;
console.log(Array.prototype);//还是原来的

Array.prototype.push=function(){}//覆盖原来的方法
Array.prototype.haspublicpro=function(){}//新增原来的方法






Array.prototype.mypush=function(){
    for(var i=0;i<arguments.length;i++){
        this[this.length]=arguments[i]
    }
    return this.length;
}
[1,2,3].mypush(4,5,6);