while循环
只要条件成立就会执行循环体里面的语句
var num=2;
while(num>3){
    console.log(num);
}
//  do while 循环
// 不管条件是否成立 先执行一次循环体里面的语句 然后再判断
var num=2;
do{
    console.log(num);
}while(num>3);

function fn(){
    // 类数组
    // console.dir(arguments)
    // 
    console.dir(arguments);
}
+function(){
    console.log(1)
}