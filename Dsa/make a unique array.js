function uniqueArray(N,arr){
    //write code here
    
   let new_arr =[];
   for(let i=0;i<N;i++){
       if(new_arr.indexOf(arr[i])=== -1){
           new_arr.push(arr[i]);
       }
   }
   let bag="";
   for(let i=0;i<new_arr.length;i++){
       bag +=new_arr[i] + " ";
   }
       console.log(bag);
   
   
}
