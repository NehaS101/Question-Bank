function repeatAndMiss(N,arr){
    //write code here
    let obj={};
    for(let i=1;i<=N;i++){
        obj[i]=0;
}
for(let i=0;i<N;i++){
        obj[arr[i]]++;
    }

    let missing,repeated;
    for(let key in obj){
        if(obj[key] === 0){
           missing=key
        }
        if(obj[key]===2){
             repeated=key
        }
       
    }
    console.log(missing,repeated);
}
