function Ways(N){
    // console.log(N)
    if(N==0){
        return 1;
    }
    if(N<0){
        return 0;
    }
    return Ways(N-1)+Ways(N-2)+Ways(N-5)
}
function runProgram(input) {
  // Write code here
  input=input.trim().split('\n')
 var tc= +input[0]
 line=1
 for(let i=0;i<tc;i++){
     var N = +input[line++]
   
   console.log(Ways(N))  
 }
}

if (process.env.USER === "") {
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
