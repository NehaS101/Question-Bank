function Valid(N,A,B){
    let stack=[];
    let j=0;
    for(let i=0;i<N;i++){
       stack.push(A[i])
       while(stack.length !==0 && j<N && stack[stack.length-1] == B[j]){
           stack.pop();
           j++;
       }
    }
    if(stack.length === 0){
        console.log("YES")
    }else{
        console.log("NO")
    }
}