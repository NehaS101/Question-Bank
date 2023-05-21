function stockValue(n,arr){
    // write code here
    let max=-Infinity;
    let sum=0;
    for(let i=0;i<n;i++){
        sum+= arr[i];
       if(sum>max){
           max=sum
       }
    }
   if(max < 0){
       console.log(0)
   }else{
       console.log(max)
   }
}
