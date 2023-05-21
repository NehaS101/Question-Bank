function sachinFan(N, arr){
    //write code here
    
 let count=0;
    for(let i=0;i<N;i++){
       for(let j=0;j<N;j++){
           let arr1=[];
       
    for(let k=i;k<=j;k++){
         
      arr1.push(arr[k]) ;
    }
                 
              for(let z=0;z<arr1.length;z++){
                   
                    if(arr1[z] =="10" ){
            count++;
            break;
           } 
          
       }    
    }
       
    }
    console.log(count)
   
     
    
}
