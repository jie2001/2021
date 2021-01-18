/* 三元运算符 */
function fn(a,b){
    return(a in b)&&(!b.hasOwnProperty(a))?true:false;//看他是否私有
}
var fn1=[1,2,3];
console.log(fn(fn1,Array));




1.所以的函数身上都有一个属性 prototype 他是对象数据类型 
2.prototype天生自带一个属性叫做constructor 指向当前类(构造函数)
3.所以的对象都有一个对象__proto__它指向的是所属类的原型
查找：先看自己私有的有没有，如果没有，基于__porto__向上查找...直到找到为止Object.prototype为止 如果说没有找到 返回值就是undefined(先看私有的，再看共有的)这种查找机制就是原型链查找



function Fn(){
    this.age=18;
    this.name="li";
    var f1=new Fn();
    function hasOwnPublicProperty(obj,attr){
        // obj 具有这个attr 这个属性（不知道公、私）
       return attr in obj&&!obj.hasOwnProperty(attr)?true:false
    }
    
    var res1=hasOwnPublicProperty(f1,"getX");//true 共有   私有、没有 false
    var res2=hasOwnPublicProperty(f1,"age");//false
    var res3=hasOwnPublicProperty(f1,"a");//false
    
    console.log(res1,res2,res3)
    
    


    function createGf(name, bar) {
        var o = new Object();
        o.name = name;
        o.bar = bar;
        o.sayWhat = function() {
          alert(this.name + "said:love you forever");
        }
        return o;
      }
      var gf1 = createGf("bingbing","d");
      var gf2 = createGf("mimi","a");





function Fn(){
  this.age=18;
  this.name="lili";
}
Fn.hasOwnProperty(name)