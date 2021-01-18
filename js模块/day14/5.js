

var a = 1;
    var obj1 = {
        a: 0,  
        fn1: (function (a) { 
            //形参赋值a=2
            this.a = a;   
            a++;
            return function () {
                this.a = a++;
                console.log(a)
            }
        })(a)
    };
    obj1.fn1();  
    var fn1 = obj1.fn1;   
    fn1();  
    console.log(a);console.log(obj1.a);





var a = 1;
    var obj1 = {
        a: 0,  
        fn1: (function (a) { 
            //形参赋值a=2
            this.a = a;   
            a++;
            return function () {
                this.a = a++;
                console.log(a)
            }
        })(a)
    };
    obj1.fn1();  
    var fn1 = obj1.fn1;   
    fn1();  
    console.log(a);console.log(obj1.a);






(function(){
    var val=1;
    var json={
        val:10,
        dbl:function(){
            val*=2;
        }
    }
    json.dbl();
    alert(json.val+val);
})()



var num = 10; //40
    var obj = {num: 15};//25
    obj.fn = (function (num) {
        
        this.num += 10;
        num *= 2;
        return function (n) {
            this.num += n;
            console.log(n + (--num));
        }
    })(obj.num);
    var fn = obj.fn;
    fn(10);  
    obj.fn(15);
    console.log(window.num, obj.num);