function  series(N){
    if(N<0){
        return;
    }
    if(N==0 || N==1){
        return 10;
    } if(N=== 2){
        return -19;
    }
    if(N>2 && N %2 == 0 && N%3 == 0){
        return (N/6)+(series(N-1)+series(N-3))
    }else if(N>2 && N %2 == 0 ){
         return (N/2)-(series(N-1)+series(N-2))
    }else if(N>2 && N%3 == 0){
         return (N/3)+(series(N-1)+series(N-3))
    }else{
        return series(N-1)
    }
    
}