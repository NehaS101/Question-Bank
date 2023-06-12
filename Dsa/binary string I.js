function binaryString(N,str){
    //write code here
     let max=0;
   
    for(let i=0;i<N;i++){
        let bag="";
        for( let j=i;j<N;j++){
            bag += str[j];
           let sum1=0;
            for(let k=0;k<bag.length;k++){
               
                if(bag[k] == 0){
                  sum1++;
                }
                if( sum1 > max && sum1 == bag.length){
                    max = sum1;
            }
             
        }
        
    }

     
 }
 console.log(max);
}
