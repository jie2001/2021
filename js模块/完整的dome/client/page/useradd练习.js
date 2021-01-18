let userAddModule=(function(){
    let $username = $('.username'),
		$spanusername = $('.spanusername'),
		$man = $('#man'),
		$woman = $('#woman'),
		$useremail = $('.useremail'),
		$spanuseremail = $('.spanuseremail'),
		$userphone = $('.userphone'),
		$spanuserphone = $('.spanuserphone'),
		$userdepartment = $('.userdepartment'),
		$userjob = $('.userjob'),
		$userdesc = $('.userdesc'),
        $submit = $('.submit');
        let userId=null;
        let isUpdate=true;
        let bindList=()=>{
            let p1=axios.get('/department/list');
            let p2=axios.get('/job/list');
            return axios.all([p1,p2]).then((res)=>{

            })
        }
}())