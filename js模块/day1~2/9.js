var num=5
num>=5?(num++,console.log(num)):num--;
console.log(num);
// 三元运算符
// ？条件 成立的执行语句：不成立执行语句
// 注意 如果执行体里面有多条语句，用小括号包起来 并且语句和语句之间用逗号隔开
num>=5?num++:num--;
// 多条语句
num>=5?(num++,console.log(num)):num--;
if(num>5){
    num+=2;
}
// 如果你只有一个if判断即可 我们改写成三元的时候 我们需要用一下占位符：

var num=12;
if(num>0){
   if(num<10){
     num++;
     console.log(num);
   }else{
     num--;
   }
}else{
    if(num==0){
       num++;
       num=num/10;
    }
}
var num=12;
num>0?(num<10?num++:(num--,console.log(num))):(num==0?(num++,num=num/10):null)


var num="6";
if(num==5){
    num++;
}else if(num==6){
    num--;
}else {
    num=0;
}
// 俩个等于号代表的是比较 两个的话 如果数据类型不同 会先转换为相同的数据类型 再进行比较
//  三个等于号的话代表的是绝对比较 数据类型和值必须相等
//  switch case 就是绝对比较（===）
switch (num){
    case 5: 
    console.log(1);
    break;
    case 6:
    num--;
    break;
    default:
    num=0;
    console.log(num);
  
}
  
