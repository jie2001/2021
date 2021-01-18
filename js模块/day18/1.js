Object.prototype.toString.call(1);//"[object Number]   
Object.prototype.toString.call("1")//"[object String]"



Object.prototype.toString.call(1)//"[object Number]
toString.call(1)//[object Number]可以简化 因为window是对象 所以也可以找到object.prototype.  window可以省略