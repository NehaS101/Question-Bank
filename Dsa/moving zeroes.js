function Zeroes(N,arr) {
    // console.log(N,arr)
    let j=0;
    for(let i=0;i<N;i++){
        if(arr[i]!== 0){
            let temp = arr[j];
            arr[j]=arr[i];
            arr[i]=temp;
            j++;
        }
       
    }
     console.log(arr.join(" "))
}
function runProgram(input) {
  // Write code here
 input=input.trim().split('\n')
 var tc= +input[0]
 line=1
 for(let i=0;i<tc;i++){
     var N = +input[line++]
     var arr = input[line++].trim().split(" ").map(Number)
    Zeroes(N,arr) 
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
