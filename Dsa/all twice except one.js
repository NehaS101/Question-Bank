function unique(N,arr){
    //Enter code here
    let obj={};
    for(let i=0;i<N;i++){
        if(obj[arr[i]] == undefined){
            obj[arr[i]]=1;
        }else{
            obj[arr[i]]++;
        }
    }
    for(let key in obj){
        if(obj[key]==1){
            console.log(key);
        }
    }
    
    }