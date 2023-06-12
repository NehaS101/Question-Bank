function dhoniFan(N, arr) {
    //write code here
    
    let count=0;
    for(let i=0;i<N;i++){
        for(let j=0;j<N;j++){
            let subarr=[];
            for(let k=i;k<=j;k++){
                subarr.push(arr[k]);
            }
      
        
        for(let z=0;z<subarr.length;z++){
           
                if(subarr[z]=="7"){
                    count++;
                    break;
                }
           }
        }
    }
     console.log(count);
    
    
    
  }
  