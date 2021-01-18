var ary=[8,2,1,5];
// 需求 排序（升序）
//  第一轮
// [2,1,5,8];经过第一轮的比较 得到处一个大数，8
// [2,1,5,8];经过第二轮的比较 得到处一个大数，5
// [1,2,5,8];经过第二轮的比较 得到处一个大数，2
// 第四轮不用比较 因为前三个排序好了 剩下的就是最小的


var ary=[8,2,1,5];
function mysort(ary){
    // 需要比较的轮数
    for(var i=0;i<ary.length-1;i++){
        // 最后一轮不用比较
        for(var j=0;j<ary.length-1-i;j++){
            // 未知轮选出一个未知最大数 放在最后便可以不用管啦 因为他不动了。
             if(ary[j]>ary[j+1]){
                 var temp=ary[j];
                 ary[j]=ary[j+1];
                 ary[j+1]=temp;

             }
        }
    }
    return ary;
}
var res=mysort(ary);
console.log(res);