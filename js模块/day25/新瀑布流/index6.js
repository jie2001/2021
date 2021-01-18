let uls = document.getElementsByTagName('ul'); // 4
let imgs = document.getElementsByClassName('bg');
let winH = utils.win('clientHeight');
let winT = utils.win('scrollTop');
// let container = document.getElementById('container');
// container.className = 'b c d'
// console.log(container.classList);
// let imgs = document.querySelectorAll('.bg')// 不行
// document.querySelectorAll;// 获取的元素没有映射功能
uls = Array.from(uls); // 现在的元素集合已经不是原生获取的集合了，所以也没有映射功能了
getData()
function getData() {
  let data = null;
  let xhr = new XMLHttpRequest;
  xhr.open('get', './data.txt', false);
  xhr.onreadystatechange = function () {
    if (/^2\d{2}$/.test(xhr.status) && xhr.readyState === 4) {
      data = JSON.parse(xhr.responseText);

    }
  }

  xhr.send(); // 10s
  renderHtml(data)
}
function renderHtml(data) {
  for (let i = 0; i < 20; i++) {
    let index = Math.round(Math.random() * 9);
    let curImg = data[index];

    let li = document.createElement('li');
    let img = document.createElement('img');
    let p = document.createElement('p');

    p.innerHTML = curImg.title;
    img.setAttribute('true-src', curImg.src);
    img.className = 'bg';
    img.style.height = Math.round(Math.random() * (250 - 180) + 180) + 'px';

    li.appendChild(img);
    li.appendChild(p);

    uls.sort((a, b) => {
      return a.scrollHeight - b.scrollHeight;
    });
    uls[0].appendChild(li);
  }

}


// 图片的懒加载
function delay() {
  for (let i = 0; i < imgs.length; i++) {
    delayImg(imgs[i])
  }
}

function delayImg(img) {
  // 对每一张图片进行是否显示的逻辑判断
  let imgH = img.offsetHeight;
  let imgT = utils.offset(img).top;
  // let winH = utils.win('clientHeight');
  // let winT = utils.win('scrollTop');
  if (winH + winT>= imgH + imgT) {
    // 先获取当前真实的路径，
    //然后创建一个img元素，利用img元素去校验当前的路径是否正确，如果正确，那当前img元素的onload对应的函数就会执行，
    // 如果onload执行了，咱们在onload对应的函数里把正确的路径在赋值给页面上的img元素就好
    let trueSrc = img.getAttribute('true-src');
    let newImg = document.createElement('img');// 在js'中动态创建一个img元素
    newImg.src = trueSrc;
    newImg.onload = function () {
      img.src = trueSrc;
      img.className = 'bg';
      img.classList.remove('bg');
      utils.fadeIn(img)
    }
  }
}

delay()
function isLoad(){
  // 函数就是判断当前数据是否需要继续加载
  // 当前body的真实高度 === 浏览器滚动条卷曲的高度+浏览器可视区域一瓶的高度
  // let winH = utils.win('clientHeight');
  // let winT = utils.win('scrollTop');
  let bodyH = utils.win('scrollHeight');
  if(winH + winT+200>=bodyH){
    getData()
  }
}

back.onclick = function(){
  // 移动距离是100
  // 把100分成50份
  // 让定时器每运行一次就走50份之一，每运行一次需要20ms
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
  // let winH = utils.win('clientHeight');
  // let winT = utils.win('scrollTop');
  if(winT>=winH){
    utils.css(back,'display','block')
  }
  else {
    utils.css(back,'display','none')
  }
}
window.onscroll = function () {
  winT = utils.win('scrollTop')
  delay();
  isLoad();
  isButtonShow()

}
console.log(100);
