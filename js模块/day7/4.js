var ary=[1,3,1,2,6,2,4];
// var obj=[1:1,3:3,2:2,4:4]
// 原理 先创建一个空对象 去遍历数组中的每一项 把数组的每项当成属性名和属性值，给对象添加 在添加的过程中 如果对象已经有了此项 说明重复 在数组中删除此项



function unique(ary){
    var obj={};
for(var i=0;i<ary.length;i++){
    var item=ary[i];
    // 说明已经有了此项
    if(obj[item]==item){
        ary.splice(i,1);
        i--;
        continue;
    }
    obj[item]=item;
    
 }
 return ary;
}
var res=unique(ary);
console.log(res);

function unique(ary){
    var obj={};
    for(var i=0;i<ary.length;i++){
        if(obj[ary[i]]==ary[i]){
            // 判断obj里面有没有相应的属性
            ary.splice(i,1);
            i--;
            continue;

        }
        obj[ary[i]]=ary[i];
        // 这句话的意思就是属性名和属性值相等 比如1:1
    }
    return ary;
}
var ary=[1,3,1,2,3,2,4];
var res=unique(ary);
console.log(res);


function unique(ary){
    var obj={};
    for(var i=0;i<ary.length;i++){
        if(obj[ary[i]]==ary[i]){
            ary.splice(i,1);
            i--;
            continue;
        }
        obj[ary[i]]=ary[i];
    }
    return ary;
}
var ary=[1,3,1,2,3,2,4];
var res=unique(ary);
console.log(res);