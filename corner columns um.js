function sumOfCornerColumns(N,M,arr){
    //write code here
  let sum=0;
  for(let i=0;i<M;i++){
      for(let j=0;j<N;j++){
          if(i==0 || i==arr.length-1){
              sum=sum+arr[j][i];
          }
         
      }
  }
  console.log(sum);
}
