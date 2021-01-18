let outer=document.getElementById('outer')
let wrapper=document.getElementById('wrapper')
let list=document.getElementById('list')
let data=null;
function getData(){
  let xhr=new XMLHttpRequest;
  xhr.open('get','./banner.json',false)
  xhr.onreadystatechange=function(){
    if(xhr.readyState===4&&/^2\d{2}/.test(xhr.status)){
      data=JSON.parse(xhr.responseText)
    }
  }
  xhr.send();
  console.log(data)
}
getData()
function bindHTML(){
  let wrapperItems=''
  let listItems=''
  data.forEach((item,index)=>{
  wrapperItems+=`<li><img src="${item.img}" alt=""></li>`;
  listItems+='<li></li>'
  })
  wrapperItems+=`<li><img src="${data[0].img}" alt=""></li>`;
  wrapper.innerHTML=wrapperItems;
  list.innerHTML=listItems
}
bindHTML();
let step=0
function autoMove(index){
  step++;
  typeof index==='undefined'?null:step=index
  if(step>=5){
    wrapper.style.left=0;
    step=1
  }
  changeFocus();
  utils.animate(wrapper,{left:-step*800},500)
}
let timer=setInterval(autoMove,2000)
outer.onmouseover=function(){
  clearInterval(timer)
}
outer.onmouseout=function(){
  timer=setInterval(autoMove,2000)
}
let tips=document.querySelectorAll("#list li")
function changeFocus(){
  for(let i=0;i<tips.length;i++){
    if(step===i){
      tips[i].classList.add('active')
    }
    else{
      tips[i].classList.remove('active')
    }
  }
  if(step===4){
    tips[0].classList.add('active')
  }
}
changeFocus();
function bindClick(){
  for(let i=0;i<tips.length;i++){
      tips[i].onclick=function(){
        console.log(i)
      //   step=i-1;// 因为automove内部有step++，所以在这里要减1，这样会跟automove内部的step++相互抵消
        autoMove(i);
        
      }
  }
}
bindClick()
right.onclick=function(){
  autoMove();
}
left.onclick=function(){
  step-=2
  if(step==-2){
      wrapper.style.left=-3200+'px'
      step=2
  }
  autoMove();
}
