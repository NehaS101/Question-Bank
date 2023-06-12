function xOdd(N,matrix){
    // write code here
    let l=0;
    let r=0;
    let sum=0;
    let e;
    let n=Math.floor(N/2);
    for(let i=0;i<N;i++){
        for(let j=0;j<N;j++){
            if(i+j == N-1){
                l += matrix[i][j];    
            }
            if(i-j == 0){
                r += matrix[i][j];
            }
            e = matrix[n][n];
        }
    }
    
  if(N% 2 == 1){
      sum = l+r-e;
      }else{
          sum= l+r;
      }
     if(sum % 2== 1){ 
      console.log("yes")
  }else{
      console.log("no")
  }
}
