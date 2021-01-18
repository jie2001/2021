let A = require('./A');

function avg(...arg){
  // 实现求平均数的方法
  // 先排序，然后去掉最大值和最小值
  // 求和然后除以length
  arg.sort((a,b)=>a-b);
  arg = arg.slice(1,arg.length-1);
  return A.SUM(...arg)/arg.length;
}
// console.log((avg)1,2,3,4,5)
module.exports = {
  avg
}