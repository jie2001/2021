function fn(){
    var res=Array.from(arguments).sort(function(a,b){return a-b});
    // res.pop();
    // res.shift();
    // var total=0;
    // for(var i=0;i<res.length;i++){
    //     total+=res[i]
    // }
    return eval(ary.join("+"))/ary.length;
    // return total/res.length;
    
}

fn(1,2,8,10)


function average(){
    var max=Math.max(...arguments);
    console.log(max)
}
var res=average(1,2,3,5,4,7,1)


function average(){
    var max=Math.max(...arguments);
    var min=Math.min(...arguments);
    return (eval([...arguments].join("+"))-max-min)/(arguments.length-2)
}
average(2,1,5,3,23,2)






/* 
求平均数：
传递的参数的个数不确定
去掉最高分和最低分

*/

function average(...arg){
    var ary=arg.sort(function(a,b){return a-b});
    ary.pop();
    ary.shift();
    var total=0;
    for(var i=0;i<ary.length;i++){
      total+=ary[i]
    }
    return total/ary.length
 }
 
 var res=average(1,2,8,10);
 console.log(res);
 
 
 //--------------2)
 
 function average(...arg){
     var ary=arg.sort(function(a,b){return a-b});
     ary.pop();
     ary.shift();
     //var total=0;
     // for(var i=0;i<ary.length;i++){
     //   total+=ary[i]
     // }
     return eval(ary.join("+"))/ary.length
    
  }
  
  var res=average(1,2,8,10);
  console.log(res);
 
 
  //3)
 function average(){
    var max= Math.max(...arguments);
    var min=Math.min(...arguments);
    return (eval([...arguments].join("+"))-max-min)/(arguments.length-2)
    
  }
 
  var res=average(1,2,8,10);
 