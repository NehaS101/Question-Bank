function Next(N,A,B){
    //Enter code here
    let stack=[];
    let j=0;
    for(let i=0;i<N;i++){
        stack.push(A[i]);
        while(stack.length !=0 && j<N && stack[stack.length-1] == B[j]){
        stack.pop();
        j++;
        }
    }
    if(stack.length == 0){
        console.log(1)
    }else{
        console.log(0)
    }
    
    }
  