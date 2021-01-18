var ary2=[{age:10},{age:20},{age:30}];
ary2.sort(function(a,b,){
    console.log(a,b,)
})
// console.log(ary2)

var ary2=[{age:10},{age:20},{age:30}];
ary2.sort(function(a,b,){
    return a.age-b.age;
})
console.log(ary2)
