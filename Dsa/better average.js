//Enter code here
function   Average(N,A,B){
    var Avg1,Avg2;
    var sum1=0;
    var sum2=0;
for(let i=0;i<N;i++){
    sum1 += A[i]
    sum2 += B[i]
    Avg1 = Math.ceil(sum1/N)
     Avg2 = Math.ceil(sum2/N)
}

if(Avg1>Avg2){
    if(Avg1 % 2 ==0){
        console.log(Avg1)
    }else{
        console.log(-1)
    }
}else{
    if(Avg2 % 2 ==0){
        console.log(Avg2)
    }else{
        console.log(-1)
    }
}
    
}
function runProgram(input){
   // Write Code Here
   input=input.trim().split('\n')
   var N = +input[0]
   var A = input[1].trim().split(" ").map(Number)
       var B = input[2].trim().split(" ").map(Number)

    Average(N,A,B)
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