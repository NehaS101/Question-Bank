function primeLoopCheck(num) {
    // Write code here
    function check(num){
         let factor=0;
    for(i=1;i<=num;i++){
        if(num%i == 0){
            factor++;
        }
    }
    if(factor == 2){
        return true;
    }else{
        return false;
    }
    }
   for(let i=0;i<=num;i++){
       if(check(i)){
           console.log(i)
       }
   }
}
