// 打印1~10
function fn(num){
    if(num>10){
        return
    }
    console.log(num);
    fn(num+1);
}
fn(1);
//  打印1~100的和
    var total=0;
    for(var i=0;i<=100;i++){
        total+=i;
    }
console.log(total);
// 1~10中即可以被2整除 也可以被3整除的数、
function fn(num){
    if(num>100){
    return 0;
    }
    // 同时能被2并且3整除
    if(num%2==0&&num%3==0){
        return num+fn(num+1)
    }
    return fn(num+1);
}
fn(1)


var ary=0;
for(var i=1;i<=100;i++){
    if(i%3==0&&i%2==0){
        ary+=i;
    }
}
console.log(ary);

var ary=0;
for(var i=0;i<=100;i++){
    if(i%3==0&&i2==00){
        ary+1;
    }
}
console.log(ary)

