function Fn(num) {
    this.x = this.y = num;
   }
   Fn.prototype = {
    x: 20,
    sum: function () {
      console.log(this.x + this.y);
    }
   };
   let f = new Fn(10);
   console.log(f.sum === Fn.prototype.sum);//true
   f.sum();//20
   Fn.prototype.sum();//nan   任何数和nan不管加减乘除都是nan
   console.log(f.constructor);//object