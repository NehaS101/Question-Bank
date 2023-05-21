function transform(N,str){
    let  bag=""
    let count=1;
    let l=0,r=1;
       for(let i=0;i<N;i++){
        if(str[l]===str[r]){
            
            count++
           
        }else if(str[l] !== str[r]){
            
            bag+= str[i]+count
            count=1;
            
            }
            l++,r++;
        }
            
        console.log(bag)
       
      
   }