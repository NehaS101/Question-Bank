function War(N,S){

    //Enter code here
    let stack=[];
    for(let i=0;i<N;i++){
        if(stack[stack.length-1]== S[i]){
            stack.pop();
        }else{
            stack.push(S[i]);
        }
    }
    if(stack.length == 0){
        console.log(-1)
    }else{
        console.log(stack.join(""))
    }
    }
    