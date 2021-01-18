var ary=[1,2,3,1,4];
// 需求 去掉重复的数
// 思路
// 第一次 拿1和2,3,1,4比较
// 第二次拿2和3,2,4比较 有重复的2 那么需要删除2



function unique(ary){
    for(var i=0;i<ary.length-1;i++){
        for(var j=i+1;j<ary.length;j++){
            if(ary[i]==ary[j]){
                ary.splice(j,1);
                j--;
    
            }
        }
    }
    return ary;
}
var ary=[1,1,1,3,1,2,3,2,4];
var ary2=[2,2,3,4,2];
var res=unique(ary);
var res2=unique(ary2)
console.log(ary);
