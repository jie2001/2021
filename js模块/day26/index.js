let uls=document.getElementsByTagName("ul")
let imgs=document.getElementsByClassName("bg")
let winH=utils.win('clientHeight')
let winT=utils.win('scrollTop')
uls=Array.from(uls)
getData();
function getData(){
  let data=null;
  let xhr=new XMLHttpRequest;
  xhr.open('get','./data.txt',false)
  xhr.onreadystatechange=function(){
  if(/^2\d{2}$/.test(xhr.status)&&xhr.readyState===4){
    data=JSON.parse(xhr.responseText)
  }
  }
  xhr.send();
  bindHTML(data);
}
function bindHTML(data){
  for(let i=0;i<20;i++){
    let index=Math.round(Math.random()*9);
    let curImg=data[index]
    let li=document.createElement('li')
    let img=document.createElement('img')
    let p=document.createElement('p')
    p.innerHTML=curImg.title;
    img.setAttribute('true-src',curImg.src)
    img.className='bg'
    img.style.height=Math.round(Math.random()*(250-180)+180)+'px'
    li.appendChild(img)
    li.appendChild(p)
    uls.sort((a,b)=>{
      return a.scrollHeight-b.scrollHeight
    });
    uls[0].appendChild(li)
  }
}
function delay(){
  for(var i=0;i<imgs.length;i++){
    delayImg(imgs[i])
  }
}
function delayImg(img){
  let imgH=img.offsetHeight;
  let imgT=utils.offset(img).top;
  if(winH+winT>=imgH+imgT){
    let trueSrc=img.getAttribute('true-src')
    let newImg=document.createElement('img')
    newImg.src=trueSrc;
    newImg.onload=function(){
      img.src=trueSrc;
      img.className='bg'
      img.classList.remove('bg')
      utils.fadeIn(img)
    }
  }
}
delay();
function isLoad(){
  let bodyH=utils.win('scrollHeight')
  if(winH+winT+200>=bodyH){
    getData();
  }
}
back.onclick = function(){
  let distance = utils.win('scrollTop');
  let step = distance/50;
  let  timer = setInterval(()=>{
    distance-=step;
    utils.win('scrollTop',distance);
    if(distance<=0){
      clearInterval(timer)
    }
  },20)
}
function isButtonShow(){
  if(winT>=winH){
    utils.css(back,'display','block')
  }
  else{
    utils.css(back,'display','none')
  }
}
window.onscroll=function(){
  winT=utils.win('scrollTop')
  delay();
  isLoad();
  isButtonShow()
}
console.log(100)