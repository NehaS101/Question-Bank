function masaiPalSubString(S){
    //write code here
    let max = -Infinity;
    for(let i=0;i<S.length;i++){
        let sub="";
       for(let j=i;j<S.length;j++){
           sub = sub+S[j];
           if(Checkpalin(sub) && sub.length >max){
               max=sub.length;
           }
       } 
    }
    console.log(max);
    function Checkpalin(str){
        let rev="";
        for(let i=str.length-1;i>=0;i--){
            rev += str[i];
        }
        if(rev == str){
            return true;
        }else{
            return false;
        }
    }
}
