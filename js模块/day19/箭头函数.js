
/* 
箭头函数
1.没有this.如果用了this.就会按照作用域链向上查找
2.箭头函数中没有arguments
3.箭头函数返回值是一个对象  简写的时候 需要加一个小括号 否则返回值不是此对象 而是undefined
*/
var fn=x=>x;
var fn=function(a){
    return function(b){
        return function(c){
            return a+b+c
        }
    }
    
}
var res=fn(1)(2)(3)
console.log(res)









