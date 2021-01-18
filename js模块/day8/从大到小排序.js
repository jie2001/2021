var ary=[8,2,1,5];
function mysort(ary){
    for(var i=0;i<ary.length-1;i++){
        for(var j=0;j<ary.length-1-i;j++){
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