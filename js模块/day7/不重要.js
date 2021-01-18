 var ary=[2,1,8,2];
 function quicksort(ary){
    if(ary.length<=1){
        return ary;
    }
    // 中间项的索引
    var centerindex=Math.floor(ary.length/2);
    // 中间项
    var centervalue=ary.splice(centerindex,1)[0];
    var leftary=[],rightary=[];
    for(var i=0;i<ary.length;i++){
        if(ary[i]<centervalue){
            leftary.push(ary[i]);
        }else{
            rightary.push(ary[i]);
        }
    }
    return quicksort(leftary).concat(centervalue,quicksort(rightary));
}
console.log(quicksort(ary));
