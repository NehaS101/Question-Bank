function segments(n,x,arr){
    let count=0;
    let l=0;
    let sum=0;
    for(let i=0;i<n;i++) {
        sum+=arr[i];
        while(sum>x){
            sum -=arr[l++];
        }
        count += i-l+1;
    }
    console.log(count);
}