// 过多长时间之后，做的一些事情(一次)
setTimeout(function(){
    console.log("hehe")

},2000)

// 每隔多长时间做一次
setInterval(function(){
    console.log("1")
},1000)

//  定时器它的返回值代表的就是.此定时器在当前页面的第几个

clearInterval
//  清除定时器



var num=0;
var time2=setInterval(function(){
    num++;
    if(num>10){
        clearInterval(time2);
        time2=null;
    }
    console.log(num)
},1000);