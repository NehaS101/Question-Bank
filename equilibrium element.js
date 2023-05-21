function equilibriumElement(N, arr){
    //write code here
           
                 let sum=0;
                 
           for(let i=0;i<N;i++){
               sum += arr[i];
           }
           let sum1=0;
               for(let i=0;i<N;i++){
                    sum = sum -arr[i];
              
               if(sum1 == sum){
                       console.log(i+1);
                       return
                  }
                  sum1 += arr[i];
                 
               }
               if(sum1 !== sum){
                   console.log(-1);
               }
                
               
               
              
            
           
           
           
                  
}
