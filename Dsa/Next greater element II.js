function NextGreater(N,arr) {
    
    let new_arr =  arr.slice(0,N-1)
 //   console.log(new_arr)
 let final_arr = [...arr,...new_arr]
 // console.log(final_arr)
 let stack=[final_arr[final_arr.length-1]];
 let ans =[-1];
 let M=final_arr.length-1
 for(let i=M-1;i>=0;i--){
     let stack2 = stack[stack.length-1] > final_arr[i];
     if(stack2){
         ans.push(stack[stack.length-1])
     }else{
         while(stack[stack.length-1]<= final_arr[i]){
             stack.pop()
             if(!stack.length){
                 break;
             }
         }
         if(!stack.length){
             ans.push(-1)
         }else{
             ans.push(stack[stack.length-1])
         }
     }
     stack.push(final_arr[i])
 }
     ans.reverse();
     console.log(ans.slice(0,N).join(" "))
 }