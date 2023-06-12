const strNum = String(num)
let count=0;
 for(let i=0;i<strNum.length-k+1;i++){
       
         let sub = strNum.substring(i,i+k);
         let sum = parseInt(sub)
        if(sum !==0 && num%sum==0){
          count++;
        }
        
    }
return count;