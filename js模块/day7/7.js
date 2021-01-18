function ueiqun(ary){
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
var ary=[1,2,3,5,2,1,2,3,2,3];
var res=ueiqun(ary);
console.log(res);

function ueiqun(ary){
    var obj=[];
    for(var i=0;i<ary.length;i++){
        if(obj.indexOf(ary[i])==-1){
            obj.push(ary[i]);
        }
    }
    return obj;
}
var ary=[1,2,3,5,2,1,2,3,2,3];
var res=ueiqun(ary);
console.log(res);
