function revArr(N,K,arr){
    // write code here
    let bag ="";
    for(i=0;i<=K-1;i++){
        bag+= arr[i]+" ";
    }
    let bag1 ="";
    for(i=N-1;i>=K;i--){
        bag1 += arr[i]+" ";
    }
    console.log(bag+bag1);
}
