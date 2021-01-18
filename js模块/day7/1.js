function main(){
    var alt=0;
    for(i=0;i<arguments.length;i++){
        if(isNaN(arguments[i])==false){
          alt=alt+Number(arguments[i]);
        }
    }
    return alt;
}
console.log(main(1,2,3,"1px","12"));



var ary=[2,3];
console.log(ary.push(1,5));
console.log(ary);



var ary=[1,2];
var res=ary.push(5);
console.log(res);
console.log(ary);


var ary=[3,2];
var res=ary.push(5);
console.log(res);
console.log(ary);

var ary=[2,3];
var res=ary.push(5)
console.log(res);
console.log(ary);





var ary=[1,2];
console.log(ary.unshift(0,1));
console.log(ary);


var ary=[1,2,3];
console.log(ary.pop());
console.log(ary);

var ary=[1,2,3];
console.log(ary.shift());
console.log(ary);



var ary=[1,2,3,4];
console.log(ary.splice(1,2,9));
console.log(ary);


var ary=[1,2,3];
console.log(ary.concat(4,5));
console.log(ary);

var ary=[1,2,3];
console.log(ary.join("+"));
console.log(ary);


var ary=[1,2,3];
console.log(ary.reverse());
console.log(ary);


var ary=[1,5,3,2,4,6];
console.log(ary.sort());
console.log(ary);

var ary=[1,5,3,2,4,6,11,8];
var res=ary.sort(function(a,b){
  return a-b;// 升序 如果是降序 那就是b-a；
});
console.log(ary.sort());
console.log(ary);


var str=[1,2,3,5,4,12];
console.log(str.indexOf(4));
console.log(str);

var str=[1,2,3,14,1,1];
console.log(str.lastIndexOf(1));
console.log(str);

var str=[1,2,3];
console.log(str.includes(1));
console.log



var ary=[8,9,7,5,6,1,11,2222];
var res=ary.forEach(function(item,index){
  console.log(item)
})