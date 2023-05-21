function solve(N,K,arr){
    //write code here
    let sum=0;
    for(let i=0;i<N;i++){
        if(arr[i]<=K){
            sum+= arr[i];
        }
    }
    console.log(sum);
}
