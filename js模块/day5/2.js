var fn=(x,y)=>x+y;
fn(1,2);

// 第一种办法
function str(){
    var aa=0;
    for(i=0;i<arguments.length;i++){
        aa=aa+arguments[i];
    }
    return aa;
}
console.log(str(1,2,3));
// 第二种办法
function str(){
    var alt=0;
    for(var i=0;i<arguments.length;i++){
       if(isNaN(arguments[i])==false){
           alt=alt+Number(arguments[i]);
       }
    }
    return alt;
}
str(1,2,3);
console.log(str(1,2,3,"1px","12"));