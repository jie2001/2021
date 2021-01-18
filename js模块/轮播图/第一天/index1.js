let outer = document.getElementById('outer');
let wrapper = document.getElementById('wrapper');
let list = document.getElementById('list')
let data = null;

// 1.数据请求
function getData(){
  let xhr = new XMLHttpRequest;
  xhr.open('get','./banner.json',false);
  xhr.onreadystatechange = function(){
    if(xhr.readyState === 4 && /^2\d{2}$/.test(xhr.status)){
      data = JSON.parse(xhr.responseText);
    }
  }
  xhr.send();
  console.log(data);
}
getData();
//2.数据渲染
function renderHTml(){
  let wrapperItems = '';
  let listItems = '';
  data.forEach((item,index)=>{
    wrapperItems+=`<li><img src="${item.img}" alt=""></li>`;
    listItems+='<li></li>'
  });
  // 在复制第一张图片放到末尾(让第一张和最后一张一样)
  wrapperItems+=`<li><img src="${data[0].img}" alt=""></li>`;
  wrapper.innerHTML = wrapperItems;//把动态生成的图片插入到页
  list.innerHTML = listItems//把动态生成的焦点插入到页面`
}
renderHTml()
let step=0;
function autoMove(index){
  step++;
  typeof index==='undefined'? null:step=index
  // 如果当前的函数执行的时候index没有值 那就什么都不做 如果index有值 那就把index的值赋给
  if(step>=5){
    /*如果当前的step大于等于5说明当前已经运动到最后一张图片了，这时候需要马上把wrapper的left值改为0，(因为第一张和最后一张一样，所以你看不见这个变化)
    // 这时候在把step改为1，正常展示第二章 */
    wrapper.style.left=0;
    step=1
}
changeFocus();
  utils.animate(wrapper,{left:-step*800},500)
}
let timer=setInterval(autoMove,2000)
// 鼠标划上停止
outer.onmouseover=function(){
    clearInterval(timer)
}
outer.onmouseout=function(){
     timer=setInterval(autoMove,2000)
}
let tips=document.querySelectorAll("#list li")
//拿querySelectorAll获取的元素没有映射
// 实现焦点跟随
function changeFocus(){
    // 切换焦点的显示
    // 循环所有的焦点，判断一下当前的step和哪个焦点的索引相等，和谁相等就给谁加上active类名，其余的清除active类名
  
    // 如果当前的step是4，说明当前页面显示的是最后一张图片，他和第一张图片公用一个焦点，这时候让第一个焦点高亮就可以了
    for(let i=0;i<tips.length;i++){
        //tips[i].代表的是每一个焦点 i就是每一个焦点的索引
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
  changeFocus();//页面初始化的时候执行一次 为了让第一张图片的焦点高亮

// 点击焦点，实现切换对应的图片
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