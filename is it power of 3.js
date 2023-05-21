function power(N){
    //Enter code here
       let X = Math.log10(N)/Math.log10(3)
       if(X - Math.floor(X)==0){
           console.log("YES")
       }else{
           console.log("NO")
       }
}