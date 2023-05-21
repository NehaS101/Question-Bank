function alanAndFrequency(N, str) {
    //write code here
    
       let obj={};
           for(let j=0;j<str.length;j++){
           if(obj[str[j]] == undefined){
               obj[str[j]] = 1;
           }else{
               obj[str[j]]++;
           }
       }
       let lower ="abcdefghijklmnopqrstuvwxyz";
       for(i=0;i<lower.length;i++){
           if(obj[lower[i]]){
               console.log(lower[i]+"-"+obj[lower[i]]);
           }
       }
       
       
        
          
         
       
    
   
  
  }
  