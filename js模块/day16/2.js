Array.prototype.Mypush=function(){
    for(var i=0;i<arguments.length;i++){
        // this[this.length]=arguments[i]
        this.splice(this.length,1,arguments[i])
        // this.splice(this.length,1,arguments[i])
    }
    return this.length
} 
var ary=[1,2,3]
ary.Mypush(4,5,6);//返回值是新增数组的长度，原数组通过此方法，把选项往末尾添加
console.log(ary);
