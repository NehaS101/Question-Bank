//Enter code here
function Zero(N,arr){
    let sum1=0;
    let sum2=0;
    for(let i=0;i<N;i++){
        if(i%2 ==1){
            sum1 += arr[i]
        }else{
            sum2 += arr[i]
        }
    }
    if(sum1-sum2 == 0){
        console.log("YES")
    }else{
        console.log("NO")
    }
}
function runProgram(input){
   // Write Code Here
   input = input.trim().split('\n')
   var N = +input[0]
   var arr = input[1].trim().split(" ").map(Number)
   Zero(N,arr)
}
if (process.env.USERNAME === "") {
     runProgram(``);
 } else {
     process.stdin.resume();
     process.stdin.setEncoding("ascii");
     let read = "";
     process.stdin.on("data", function (input) {
         read += input;
     });
     process.stdin.on("end", function () {
         read = read.replace(/\n$/, "");
         read = read.replace(/\n$/, "");
         runProgram(read);
     });
     process.on("SIGINT", function () {
         read = read.replace(/\n$/, "");
         runProgram(read);
         process.exit(0);
     });
 }