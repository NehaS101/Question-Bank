function changeArr(N, A){
    //write code here
    let min =Infinity;
   
    for(i=0;i<N;i++){
        if(A[i]<min){
            min = A[i];
        }
    }
     let bag="";
      for(i=0;i<N;i++){
        if(A[i] % min == 0){
           A[i] = -1;
        }
            bag += A[i] +" ";
        
      }
    
   
     console.log(bag);
  }
  