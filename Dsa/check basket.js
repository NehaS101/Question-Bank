function checkBasket(N,B){
    // write code here
    let flag="Single Type"
    for(let i=0;i<N;i++){
        if(B[0] != B[N-1]){
             flag = "Mixed Basket";
        }
       
    }
    console.log(flag)
}
