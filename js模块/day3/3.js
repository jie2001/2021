//  i++和++i的区别
// 无论是++i 还是i++ 最终的i 值都是加了1
//  b++i 加号在前 先自身累计 然后再赋值给b就是3
//  b=i++ 加号再后 先赋值（b就是二）再自身累加


function main(){
    var alt=0;
    for(i=0;i<arguments.length;i++){
        alt=alt+arguments[i];
    }
    return alt;
}
main(1,2,3);
console.log(main(1,2,3,1));