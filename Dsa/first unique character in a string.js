function repeating(str){
    let obj={};
    for(let key of str){
        obj[key]? obj[key]++ : obj[key] =1;
    
    }
    for(let key in str){
        if(obj[str[key]]==1){
            console.log(key)
            return;
        }
    }
    console.log(-1)
    }