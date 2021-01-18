var  ary = [12,3,66,88,68,56,66];
for(var i=0;i<ary.length-1;i++){
    if(ary[i]>ary[i+1]){
       var temp=ary[i];
       ary[i]=ary[i+1];
       ary[i+1]=temp;
    }
}
console.log(ary);


var ary=[1,25,4,5,682];
for(var i=0;i<ary.length-1;i++){
    if(ary[i]>ary[i+1]){
        var res=ary[i];
        ary[i]=ary[i=1]
        ary[i+1]=res
    }
}
console.log(ary)


var ary=[20,4,2,3,5,6];
for(var i=0;i<ary.length;i++){
    if(ary[i]>ary[i+1]){
        var res=ary[i];
        ary[i]=ary[i+1]
        ary[i+1]=res
    }
}
console.log(ary)



var ary=[20,40,100,30,52];
var res=Math.max.apply(null,ary);
console.log(res)


var ary=[100,2,5,41,20];
console.log(ary.sort(function(a,b){return a-b;}).pop())



var ary=[100,2,5,41,20];
console.log(ary.sort(function(a,b){return b-a;}).shift())



