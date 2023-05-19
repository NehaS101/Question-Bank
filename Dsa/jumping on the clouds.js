function Jumping(n,c) {
    // console.log(n,c)
   
    var jumps=0;
    let i=0;
    while(i<n){
      
        if(i+2<n && c[i+2]==0){
            i+=2
            jumps++
        }else if(i+1<n &&c[i+1]==0){
            i++;
            jumps++
        }else{
            i++
        }
    }
    console.log(jumps)
}