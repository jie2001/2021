var ary=[5,8,1,2,10]
ary.sort(function(a,b){
    return a,b
})
ary.reverse();
ary.push(10);
ary.shift()
console.log(ary)

// 链式调用法
var ary=[5,8,1,2,10];
ary.sort(function(a,b){
    return a-b
}).reverse().push(10)9o;
ary.shift();
console.log(ary)

var ary=[5,2,3,1,4]
ary.sort(function(a,b){
    return a-b;
}).reverse().push(10);
ary.shift();
console.log(ary);