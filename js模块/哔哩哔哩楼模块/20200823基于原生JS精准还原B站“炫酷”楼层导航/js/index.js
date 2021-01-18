// 得到元素到页面顶部的距离
function getTop(ele) {
    let top = ele.offsetTop,
        left = ele.offsetLeft,
        parent = ele.offsetParent;
    while(parent) {
        top += parent.offsetTop;
        left += parent.offsetLeft;
        parent = parent.offsetParent;
    }
    return {
        top,
        left
    }
}
let mapList = [{
    id: 'guochuang',
    text: '国创',
    top: 0,
    active: false
}, {
    id: 'yinyue',
    text: '音乐',
    top: 0,
    active: false
}, {
    id: 'fanju',
    text: '番剧',
    top: 0,
    active: false
}, {
    id: 'manhua',
    text: '漫画',
    top: 0,
    active: false
}, {
    id: 'wudao',
    text: '舞蹈',
    top: 0,
    active: false
}, {
    id: 'donghua',
    text: '动画',
    top: 0,
    active: false
}, {
    id: 'zixun',
    text: '资讯',
    top: 0,
    active: false
}];
let navigation = document.querySelector('.navigation'),
    list = navigation.querySelector('.list'),
    isEdit = false
// 获取页面板块到顶部的距离
function computedTop () {
    mapList = mapList.map(item => {
        let ele = document.getElementById(item.id);
        item.top = getTop(ele).top;
        return item;
    })
}
computedTop()

// 把数组渲染到DOM上
function renderList () {
    let text = '';
    mapList.forEach(item => {
        text += `<li class="${item.active ? 'active' : ''}" data-id="${item.id}">${item.text}</li>`
    })
    list.innerHTML = text;
}
renderList();

// 改变导航板块active
function changeActive () {
    let scrollTop = document.documentElement.scrollTop;
    mapList.forEach(item => {
        item.active = false;
    })
    if (scrollTop < mapList[0].top) {
    } else if (scrollTop>mapList[mapList.length-1].top) {
        mapList[mapList.length-1].active = true;
    } else {
        for (let i = 0; i<mapList.length;i++) {
            if (scrollTop > mapList[i].top && scrollTop<mapList[i+1].top) {
                mapList[i].active = true;
            }
        }
    }
}
window.addEventListener('scroll', function(e) {
    // console.log(e)
    let scrollTop = document.documentElement.scrollTop;
    if (scrollTop > 432) {
        navigation.style.position = 'fixed';
        navigation.style.top = '100px';
    } else{
        navigation.style.position = 'absolute';
        navigation.style.top = '250px';
    }
    changeActive();
    renderList();
})
let navigationModal = document.querySelector('.navigation-modal'),
    markBox = document.querySelector('.mark-box')
navigation.addEventListener('click', function (e) {
    console.log(e)
    let target = e.target,
        targetTagName = target.tagName,
        targetClass = target.className;
    // 把A/I合并为外层A 统一判断处理
    if (targetTagName == 'I') {
        target = target.parentNode;
        targetTagName = target.tagName;
        targetClass = target.className;
    }
    // 点击导航的某板块，页面滚动到对应板块 LI
    if (targetTagName == 'LI') {
        let id = target.getAttribute('data-id');
        let item = mapList.find(item => id === item.id);
        item.active = true;
        document.documentElement.scrollTop = item.top;
    }
    // 点击导航向上箭头  回到顶部 I/A => A.top-btn
    if (targetTagName == 'A' && targetClass.indexOf('top-btn') > -1) {
        document.documentElement.scrollTop = 0;
    }
    // 点击导航编辑按钮，改变编辑态 I/A => A.sort-btn
    if (targetTagName == 'A' && targetClass.indexOf('sort-btn') > -1) {
        if (isEdit) {
            isEdit = false;
            changeActive();
            target.classList.remove('active');
            navigationModal.style.display = 'none';
            markBox.style.display = 'none';
            renderList();
            return;
        }
        isEdit = true;
        mapList.forEach(item => {
            item.active = false;
        })
        renderList();
        target.className = targetClass + ' active';
        navigationModal.style.display = 'block';
        markBox.style.display = 'block';
    }
})
