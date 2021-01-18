// var ary=[1,3,1,2,3,2,4];

function unique(ary){
    for(var i=0;i<ary.length-1;i++){
        // 这个-1是因为最后一个不变例 后面也没有数了 所以没必要再动
        for(var j=i+1;j<ary.length;j++){
            // j和i是一样的 是索引值 用一个j是因为怕自己懵逼 j=i+1是为了让他和后面的数进行对比
            if(ary[i]==ary[j]){
                // 用i和j比较
                ary.splice(j,1);
                // 删掉j 只删一个
                j--;
            }
        }
    }
    return ary;
    // 这个是形参
}
var ary=[1,3,1,2,3,2,4];
var res=unique(ary);
console.log(res);

// 第二个
function unique(ary){
    var obj={};
    for(var i=0;i<ary.length;i++){
        if(obj[ary[i]]==ary[i]){
            ary.splice(i,1);
            i--;
            continue
        }
        obj[ary[i]]=ary[i];
    }
    return ary;
}
var ary=[1,2,3,4,2,4,2,5];
var res=unique(ary);
console.log(res);

// 第三个
function unique(ary){
    var newAry=[];
    for(var i=0;i<ary.length;i++){
        if(newAry.indexOf(ary[i])==-1){
            newAry.push(ary[i]);
        }
    }
    return newAry;
}
var ary=[1,3,1,2,3,2,4];
var res=unique(ary);
console.log(res);

