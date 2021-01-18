var utils=(function(){
    function toArray(likeArray){
        var newAry=[];
        for(var i=0;i<likeArray.length;i++){
         newAry.push(likeArray[i])
        }
        return newAry
    }
    return {
        toArray:toArray
    }
})();