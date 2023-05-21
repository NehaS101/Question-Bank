function matrixNonPrimeCheck(N, M, arr) {
    //write code here
    function check(num){
        if(num<=1 ){
            return false;
        }
        let factors=0;
        for(let i=0; i<=num; i++){
            if(num%i == 0){
               factors++;
            }
        }
        if(factors==2){
            return true;
        }else{
            return false;
        }
    }
    let count=0;
    let count1=0;
    for(let i=0;i<N;i++){
        for(let j=0;j<M;j++){
            if(check(arr[i][j])){
                count++;
            }else{
                count1++;
            }
        }
    }
    console.log(count1);
  }
  