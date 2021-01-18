var str=[1,2,3,4,5,6,7];
for(var i=0;i<str.length;i++){
    //  %算得是索引 而不是值（123467）索引是0 %是去余数 剩下的数 3%2=1
    //  这个算得是奇数
    if(i%2==0){
      console.log(str[i]);
    }
    
}
var str=[1,2,3,4,5,6,7];
//  这个算得是偶数
for(var i=0;i<str.length;i++){
    if(i%2==1){
        console.log(str[i]);
    }
}