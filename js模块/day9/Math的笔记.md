## Math.abs(求绝对值)
... 
math.abs(-1);//1
...

##  Math.random()获取{0~1}之间的随机小数 
## Math.ceil(向上取整)
无论是正数 或者是负数都加一 取最大的值
负数把小数位子抹掉 然后不用管
...
math.celi(1,2);//2
math.celi(-1,2);//-1

## Math.floor(向下取整)

...
math.floor(1.8);//1
math.floor(-1.8)；//-2

## Math.min()，math.max()取最小值和取最大得值
...math.min(1，2,3)//1
...math.max(1,2,3)//3
## Math.round()四舍五入
正数就是正常的四舍五入 过了五就入 没过的话就舍 但是负数有点特殊 必须大一丢丢才可以入 比如1.51可以入
1.5就是不能入

....
matc.round
matc.round
...
## Math.pow(n,m)n的m次幂
...


## 获取n-m之间的随机数
Math random()*10+10
...
a.Math.random是取[0,1)的数；
b.取[min,max]的随机整数时使用如下公式：
  Math.floor(Math.random().(max-min+1)+min)
c.取[min.max)的随机整数时使用如下公式：
 　Math.floor(Math.random().(max-min)+min)
d.取(min,max]的随机整数时使用如下公式：
 　Math.floor(Math.random().(max-min)+min+1)
