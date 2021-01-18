// console.log(this);
// function fn(){
//     console.log(this);
// }
// var obj={
//     "name":"li",
//     fn:fn
// }
// obj.fn();

// ;(function(){
//     console.log(this);
// })();


function fn(callback){
    console.log("下午好");
    callback();
}
fn(function(){
    alert(1);
})