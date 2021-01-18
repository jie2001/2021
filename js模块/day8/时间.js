// 时间字符串处理 把下面的  
var str="2019-8-18 12:32:18";
function zero(num){
    if(num<10){
        return "0"+num;
    }
    return num;
}
var ary=str.split(" ");
// 左盒子 放在里面
var leftAry=ary[0].split("-");
// 右盒子 放在里面
var rightAry=ary[1].split(":");
var res=zero(leftAry[0])+"年"+zero(leftAry[1])+"月"+zero(leftAry[2])+"日"+" "+zero(rightAry[0])+"时"+zero(rightAry[1])+"分"+zero(rightAry[2])+"秒";
console.log(res);


