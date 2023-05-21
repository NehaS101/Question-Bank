function twoPrimes(a,b) {
    //write code here
function Prime(num){
    let factor=0;
    for(let i=1;i<=num;i++){
        if(num % i == 0){
            factor++;
        }
    }
    if(factor == 2){
        return true;
    }else{
        return false;
    }
}
if(Prime(a) && Prime(b)){
    console.log("True");
}else{
    console.log("False")
}
}