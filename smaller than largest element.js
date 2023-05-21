function smallerThanLargest(N, A){
    // write code here
    let max=0;
    for(let i=0;i<N;i++){
        if(A[i]>max){
            max=A[i];
            
        }
      
    }
   let bag="";
    for(let i=0;i<N;i++){
        if(A[i]<max){
            A[i]=-1;
        }
        bag += A[i]+" "
    }
   console.log(bag);
}
