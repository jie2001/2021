var str="https://www.baidu.com?name=zhufeng&age=10&id=14";
var res=str.split("?")[1].split("&").join("=").split("=")
console.log(res)
var obj={};
for(var i=0;i<res.length;i++){
      if(i%2==0){
       obj[res[i]]==res[i+1];
      }
}
console.log(obj)