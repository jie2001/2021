var str="abc"
console.log(str.charAt(0))=a
console.log(str.charAt(100))=""
// charAt
// 作用 获取指定索引位置对应的那个字符
// 区别 str[索引] 和str.charAt(索引)基本一样.区别；如果超过了字符串的长度 获取的结果不同 、
// str[索引]得到的是undefined  str.charAt得到的是""

## charCodeAt(索引)
// 获取字符串中特定索引对应的字符串ascii码值(十进制的)
var str="abc"
console.log(str.(charCodeAt(1)))==98
https://baike.sogou.com/v53369.htm?fromTitle=ASCII


// indexOf/lastIndexof()

// slice(n,m)
   + n;从索引n开始(包含)
   + m；到m处结束(不包含)
   + 索引可以是负数

## 5.substring(n,m);
跟slice的用法一样
slice和substring的区别？
slice索引是负数 substring索引只能是正数

## substr(n,m);
+ n; 从索引n开始截取
+ m； 截取m项

## 大小写转换
+ touppercase 转为大写
+ tolowercase 转为小写

## replace(n,m)；把字符串中的某些字符(n)转换为m
+ n；要替换字符(还可以是正则 符合某个规则的字符)
+ m；最终替换成的字符(呈现)

...
var str="zhu123zhu456"
var res=str.repeat(/zhu/g./"哈");//"哈"123哈456哈
...


## split(m) 就是把字符串按照指定的分隔符分成数组
+ m；代表指定的分隔符
...
var str="10;20;30";
var res=str.split(":");//["10":"20":"30"]

var str="2019-8-18 12:32:18";

console.log(str);

## 截取字符串的三种方法
var str=["abcd"]
str.slice(0)
str.substring(0,1)
str.substr(0,2)