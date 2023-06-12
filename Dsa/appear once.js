function appearOnce(N, arr) {
    //write code here
   let obj={};
   for(let i=0;i<N;i++){
       let char = arr[i];
       if(obj[char] == undefined){
           obj[char]=1;
       }else{
           obj[char]++;
       }
   }
       let sum=0;
       for(let key in obj){
           if(obj[key]==1){
               sum += +(key);
           }
       }
       console.log(sum);
   
   
  }
   
  
  