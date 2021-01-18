function unique(ary){
    for(var i=0;i<ary.length-1;i++){
        for(var j=i+1;j<ary.length;j++){
            if(ary[i]==ary[j]){
                ary.splice(j,1);
                j--;
            }
            
        }
        return ary;
    }
}
var ary=[1,1,1,3,1,2,3,5,1];
var ary2=[2,2,3,4,2];
var res=unique(ary);
var res2=unique(ary2)
console.log(ary);
