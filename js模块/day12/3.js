// 变量提升的特殊性 
//  判断语句 不论条件是否成立 都会进行变量提升
// var 还是之前理解 只声明 不定义
// function 在老版本浏览器中  声明加+定义 
                            //  在新版本浏览器中 只声明不定义


// 在变量提升阶段 声明变量 a
// 代码自上而下执行

console.log(a)  .undfined
if(1==2){
    var a=12
    function fn(){
        console.log(1)
    }
}
console.log(fn)