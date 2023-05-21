function patternPrintingI(N) {
    // Write code here
    for(let i=1;i<=N;i++){
        let bag="";
        for(let j=1;j<=N;j++){
            if(i==1 || i==N){
            bag=bag+"*" +" ";
            }else if(j==1 ){
          bag=bag+"*"+" ";
            }else{
                bag=bag+"";
            }
        }
        console.log(bag);
        }
    
}

