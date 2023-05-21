function strongPassword(N,arr){
    //write code here
let pass=[]

for(let i=0;i<N;i++){
    let flag = false;
    for(let j=0;j<arr[i].length;j++){
        if(arr[i][j] ==="@" ||arr[i][j] ==="#"||arr[i][j] ==="$"||arr[i][j] ==="*"){
            flag=true;
        }
    }
    if(flag == true){
        pass.push("strong")
    }else{
        pass.push("weak")
    }
}
console.log(pass.join(" "))
}
