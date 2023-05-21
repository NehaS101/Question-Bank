function Money(N,X,arr){
    
    if(N<0 || X<0){
        return 0
    }
    if(N === 0 || X===0 ){
        return 1;
    }
    let count=0;
     for(let i=0;i<N;i++){
         let sum =X-arr[i]
         let result = (Money(N,sum,arr))
         count += result
     }
  
   
   return count;
    
 }