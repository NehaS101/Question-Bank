function Smart(N,X,Y,arr){
    let s1=0;
  for(let i=0;i<N;i++){
     s1+= arr[i];
}

let s3=0;
    for( let i=0;i<N;i++){
        if(arr[i]>Y){
            arr[i]=arr[i]-Y;
        }else{
            arr[i]=0;
        }
        s3+=arr[i];
    }
    
    
   let s2 = X+s3;
  if(s1>s2){
      console.log("YES");
  }else{
      console.log("NO");
  }
}