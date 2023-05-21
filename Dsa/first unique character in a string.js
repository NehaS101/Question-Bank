function repeating(str){
    let obj={}
    for(let i=0;i<S.length;i++){
        if(obj[S[i]] == undefined){
            obj[S[i]]=1;
            
        }else{
             obj[S[i]]++;
        }
    }
    let flag="Not Found"
    for(let key in obj){
       if(obj[key] == 1){
           flag = key
           break;
       } 
       
       
    }
    console.log(flag)
    }