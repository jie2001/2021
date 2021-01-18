function main(){
    var alt=0;
    for(var i=0;i<arguments.length;i++){
        if(isNaN(arguments[i])==false){
            alt+=+Number(arguments[i]);
        }
    }
    return alt
}
console.log(main(1,2,3,"1px","12"))
