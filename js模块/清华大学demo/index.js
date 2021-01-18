
function getData(){
    let xhr=new XMLHttpRequest
    xhr.open('get','./data.json',false)
    xhr.onreadystatechange=function(){
        if(xhr.readyState===4&&/^2\d{2}/.test(xhr.status)){
            data=JSON.parse(xhr.responseText)
            console.log(data)
        }
    }
    xhr.send()
}
getData()

function render(){
    let str=``;
    data.forEach((item,index)=>{
        str+= `<li><a href="https://www.tsinghua.edu.cn/en/info/1032/2081.htm"><img src='${item.img}' alt=""></a></li>`
    })
    $('#uls').html(str)
}
render()
let step=0;
function automove(){
    step++;
    if(step>=data.length){
        step=0
    }
    $('#uls li').eq(step).fadeIn(2000).siblings().fadeOut(2000)
}
automove()
let timer=setInterval(automove,3000)

let lower=document.getElementById("lower");
let lowerlis=lower.getElementsByClassName("d7");
console.log(lowerlis)
for(let i=0;i<lowerlis.length;i++){
    lowerlis[i].onmouseover=function(){
        this.classList.add("di");
        this.querySelector("ol").style.display="block";
    }
    lowerlis[i].onmouseout=function(){
        this.classList.remove("di");
        this.getElementsByTagName("ol")[0].style.display="none";
    }
}