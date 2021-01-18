let uls = document.getElementsByTagName('ul');
uls = Array.from(uls);
let page = 1
let imgs = document.getElementsByClassName('bg');
let data = null;
function getData(num) {
  let xhr = new XMLHttpRequest;
  xhr.open('get', './data.txt',false);
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && /^2\d{2}$/.test(xhr.status)) {
      data = JSON.parse(xhr.responseText);
    }
  }
  xhr.send()
  bindHTML(data)// 
  console.log(data);
}
getData(page);

// 渲染数据

function bindHTML(data) {
  for (let i = 0; i < 20; i++) {
    let index = Math.round(Math.random() * 9) // 随机产生0-9之间的整数
    let curImg = data[index]; // 从data中随机获取一张图片的信息

    let li = document.createElement('li');
    let img = document.createElement('img');
    let p = document.createElement('p');

    img.setAttribute('true-img', curImg.src); // 把图片的真实路径已经放到img元素的行间
    img.className = 'bg';
    img.style.height = Math.round(Math.random()*(250-180)+180) + 'px';
    p.innerText = curImg.title;
    li.appendChild(img); 

    li.appendChild(p);
    // console.log(li);
    uls.sort((a,b)=>{
      // console.log(a.scrollHeight ,b.scrollHeight)
      return a.scrollHeight - b.scrollHeight
    });
    // console.log(uls);
    uls[0].appendChild(li);
  }

}

function delay (){
  for(let i = 0;i<imgs.length;i++){
    delayImg(imgs[i])
  }
}
function delayImg(img){
  let winH = utils.win('clientHeight');
  let winT = utils.win('scrollTop');
  let imgH = img.offsetHeight;
  let imgT = utils.offset(img).top;
  if(winH + winT>=imgH+imgT){
    let trueSrc = img.getAttribute('true-img');
    let newImg = new Image;
    newImg.src = trueSrc;
    newImg.onload = function(){
      img.src=trueSrc;
      img.className = '';
    }
  }
}
delay();
function isLoad(){
  // 去判断当前图片是否继续分页请求
  // 当浏览器滚动条卷曲的高度+浏览器可视区域的高度 >=body的真实的高度的时候，说明滚动条已经到底了
  let winH = utils.win('clientHeight');
  let winT = utils.win('scrollTop');
  let bodyH = utils.win('scrollHeight');
  // 当滚动条即将要跑到底的时候 马上发送请求去拿到下一页的数据
  if(winH+winT+100>=bodyH){
    getData()
  }

}
window.onscroll = function(){
delay()
isLoad()
}