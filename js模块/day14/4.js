var num=10;//60  65
var obj={num:20};
obj.fn=(function(num){  //形参赋值 num变成二十 
   this.num=num*3;
   num++;  // num 21 22 23
   return function(n){
       this.num+=n;
       num++;
       console.log(num);23
   }
})(obj.num);
var fn=obj.fn;
fn(5);
obj.fn(10);30 
console.log(num,obj.num) 65 30





var num=10;//====>60===>65
var obj={num:20};//===>obj={num:30}
obj.fn=(function(num){
    // num=20 私有===>21==>22==>23
    // window.num=20*3=60
   this.num=num*3;
   num++;//
   return function(n){
       //私有： n=5 ====>10
       // window.num+=n 60+5=65
       //obj.num+=10
       this.num+=n; //20+10=30
       num++;//
       console.log(num);//22 23
   }
})(obj.num);// 20
var fn=obj.fn;
fn(5);
obj.fn(10);
console.log(num,obj.num)



### 单利设计模式
把描述同一个事物的所有属性放到一个对象中 这样可以避免之间的互相冲突 这就是单利设计模式


### 高级单利设置模式
var utils=(function(){
    var num=3;
    function fn(){

    }
    return {
        num:num
        fn:fn
    }
})();


### 工厂设计模式(函数封装)
function person(name,age,sex){
    return{
        job:"前端开发工程师"
        name:name,
        age:age,
        sex:sex,
    }
}
var p1=rerson("name",年龄,"性别")


### 构造函数：当函数执行的时候，前面一旦加了new 就变成了构造函数(类)
如果构造函数没有形参 再调用的时候可以直接省去()//var f1=new fn
f1、f2就变成实例 实例就是对象数据类型 实例和实例是不相等的(空间地址不相同)
function fn(){
    this.name="li"
    this.age=10;  
}
var f1=new fn("li",10);
var f2=new fn("li",10);
console.log(f1,f2)
/* 
创建数组的两种方式；
1.构造函数(类)；
通过此方式进行创建的时候，
    参数；1个的时候代表的是数组的长度
    参数>1，代表的就是数组的每项
2.字面量的方式    
*/
var f1=new Array(1,2,3);//[1,2,3]
var f2=[4,5,6]//创建数组长度是5项的数组，但每项都是空内容