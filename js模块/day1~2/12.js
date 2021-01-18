//1
var num=5;
if(num>=5){
    num++;
}
else{
    num--;
}
console.log(num);
//2
var num=5;
num>=5?num++:num--;
console.log(num);
//3
var num=5;
if(num==5){
    num++;
}
else if(num==6){
    num--;
}
else{
    num=0;
}
console.log(num);
//4
var num=5;
switch(num){
    case 5:
        num++;//6
        break;
    case 6:
        num--;//5
        break;
    default:num=0;
}
console.log(num);