
// 封装splice
let res = [1, 2, 3, 4, 5, 6, 7] //[1,2,3,8,9,6,7]
Array.prototype.Mysplice=function(n,m,...arg){
  var ary1=[];
  var ary2=[];
  for(var i=0;i<n;i++){
    ary1.push(this[i])
  }
  for(var i=n+m;i<this.length;i++){
    ary2.push(this[i])
  }
  var res=ary1.concat(arg,ary2)
  return res
}
console.log(res.Mysplice(3,2,8,9))
console.log(res)


// 封装tostring
let res = [1, 2, 3, 4, 5, 6, 7] //[1,2,3,8,9,6,7]
Array.prototype.Myto=function(){
  var lists='';
  for(var i=0;i<this.length;i++){
    lists=lists+','+this[i]
  }
  lists=lists.replace(',','')
  return lists
}
console.log(res.Myto())





let res = [1, 2, 3, 4, 5, 6, 7] //[1,2,3,8,9,6,7]
Array.prototype.Myto=function(){
  var lists='';
  for(var i=0;i<this.length;i++){
    lists=lists+','+this[i]
  }
  lists=lists.replace(',','')
  return lists
}
console.log(res.Myto())



let ary = [1, 2, 3, 4, 5, 6];
    Array.prototype.mySplice = function (n, m, ...arg) {
        let ary1 = [];
        let ary2 = [];
        for (var i = 0; i < n; i++) {
            ary1.push(this[i]);
        }
        for (var i = n + m; i < this.length; i++) {
            ary2.push(this[i]);
        }
        let res = ary1.concat(arg, ary2);
        let len = this.length;
        for (i = 0; i < len; i++) {
            this.shift();
        }
        for (var i = 0; i < res.length; i++) {
            this.push(res[i]);
        }
        return this;

    }
    ary.mySplice(2, 2, 7, 8, 9)
    console.log(ary);


    //join
Array.prototype.myJoin = function (sign) {
      var str = "";
      for (var i = 0; i < this.length; i++) {
          if (this[i] != undefined) {
              str += this[i];
          }
          if (this.length - i > 1) {
              str += sign;
          }
      }
      return str;
  }
  var ary = [, , , , , , ,];
  ary.myJoin("=");


  //concat
var ary=[1,2,3,4]
var ary1=[5,6]
Array.prototype.myConcat = function (...arg) {
      var newAry = [...this];
      for (var i = 0; i < arg.length; i++) {
          if (Object.prototype.toString.call(arg[i]) == "[object Array]") {
              for (var j = 0; j < arg[i].length; j++) {
                  newAry[newAry.length] = arg[i][j];
              }
          } else {
              newAry[newAry.length] = arg[i];
          }
      }
      return newAry;
  
  }
console.log(ary.myConcat(ary1))
console.log(ary)