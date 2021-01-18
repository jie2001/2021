function main(){
    var alt=0;
    for(var i=0;i<arguments.length;i++){
        if(isNaN(arguments[i])==false){
            alt=alt+Number(arguments[i]);
        }
    }
    return alt;
}
console.log(main(1,2,3,"1px","12"));


function str(){
    var alt=0;
    for(i=0;i<arguments.length;i++){
        alt=alt+arguments[i];
    }
    return alt;
}
console.log(str(1,2,3));    