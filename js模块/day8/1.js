var str="2019-8-18 12:32:18";
function zero(num){
    if(num<10){
        return "0"+num;
    }
    return num;
}
var ary=str.split(" ");
var left=ary[0].split("-");
var right=ary[1].split(":")
var str=zero(left[0])+"年"+zero(left[1])+"月"+zero(left[2])+"日"+" "+zero(right[0])+"时"+zero(right[1])+"分"+zero(right[2])+"秒"
console.log(str);