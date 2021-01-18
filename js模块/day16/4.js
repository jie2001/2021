Object.prototype.adHasowmproperty=function(b){
return b in this&&!this.hasOwnProperty(b)?true:false;//首先有这个属性 并且是不是私有的 turn或者是false
}
var str={name:"1"}
str.adHasowmproperty("name");