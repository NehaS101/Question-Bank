function SwastikaAndsum(N,M,arr){
    let sum1=0;
    let sum2=0;
 
  for(let i=0;i<N;i++){
      for(let j=0;j<M;j++){
          if((i===0 && j>(M-1)/2) || (i===N-1 && j<(M-1)/2))
    {
        sum1+= arr[i][j]
    } else if(j===(M-1)/2) {
        sum1+= arr[i][j]
    }
   }    
      
  }      
  for(let i=0;i<N;i++){
      for(let j=0;j<M;j++){
          if((j===M-1 && i>(N-1)/2) || (j===0 && i<(N-1)/2))
    {
        sum2+= arr[i][j]
    } else if(i===(N-1)/2) {
        sum2+= arr[i][j]
    }
   }    
      
  } 
  console.log(Math.abs(sum1-sum2))
  
   
 }