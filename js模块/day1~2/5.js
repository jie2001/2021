var num=0;
// 打印
console.log(num);
var box=document.getElementById("box");
// 详细输出
console.dir(box);
// 弹框的时候 会把数据转为字符串
var boj={name:"lili"};
// alert(obj)
// 提示框 如果点击是确定 返回值就是true 如果是点击的取消 返回值就是false
var res=confirm("你准备好了吗");
console.log(res);
// 带输入框的提示框 ；返回值，如果点击的是确定 返回的就是你输入的内容 如果取消那就是null
var res2=prompt("你是男孩还是女孩");
console.log(res2);
