function Neg(N,M,arr){
    //Enter code here
    let sum=0;
    for(let i=0;i<N;i++){
        for(let j=0;j<M;j++){
            sum+= arr[i][j];
        }
    }
    for(let i=0;i<N;i++){
        let bag="";
        for(let j=0;j<M;j++){
        arr[i][j] = sum-arr[i][j];
         bag += arr[i][j] +" ";
        }
       console.log(bag)
    }
    }