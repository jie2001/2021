let userListModule=(function(){
    let $deleteAll=$('.deleteAll')
    let $thead=$('thead')
    let $headTh=$thead.find('th')
    let $tbody=$('tbody')
    let power=decodeURIComponent(localStorage.getItem('power'))
    let checkPower=()=>{
        if(!power.includes('userhandle')){
            $deleteAll.remove();
            $headTh.first().remove();
            $headTh.last().remove()
        }
    }
    let bindSelect=()=>{
        return axios.get('/department/list').then((res)=>{
            let{
                code,
                data,
            }=res;
            if(code==0){
                let str=`<option value"0">全部</option>`
                data.forEach(item=>{
                    let {
                        id,
                        name,
                    }=item;
                    str+=`<option value="${id}">${name}</option>`
                })
                $('.selectBox').html(str);
            }
        })
    }


    return{
        init(){
            checkPower()
            bindSelect().then(()=>{

            })
        }
    }
}())
userListModule.init();