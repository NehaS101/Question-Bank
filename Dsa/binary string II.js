function binaryString2(N,str){
    //write code here
 let max=0;
 for(let i=0;i<N;i++){
     let bag="";
     for(j=i;j<N;j++){
         bag += str[j];
         let sum=0;
         for(let k=0;k<bag.length;k++){
             if(bag[k] == 1){
                 sum++;
             }
             if(sum > max && sum==bag.length){
                 max=sum;
             }
         }
     }
 }
 console.log(max);

}
