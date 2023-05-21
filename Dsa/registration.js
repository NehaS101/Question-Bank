function Masai(N,arr){
   
  
    //   console.log(arr)
    let obj={};
    
        for(let i=0;i<arr.length;i++){
            let ch =arr[i]
            if(obj[ch] == undefined){
                obj[ch]=1;
                console.log("OK")
            }else{
                
                obj[ch]++
              
                console.log(arr[i]+(obj[ch]-1))
            }
        }
    }
    