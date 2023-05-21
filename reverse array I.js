function revArr(N,K,arr){
    // write code here
   
       let bag="";
       for(j=K;j>=0;j--){
          bag += arr[j]+" ";
       }
       let bag1="";
       for(i=K+1;i<N;i++){
         bag1 += arr[i]+" ";  
       }
       console.log(bag+bag1);
    
}
