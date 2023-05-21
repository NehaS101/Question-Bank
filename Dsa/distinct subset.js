
  
function Distinct(N,arr) {
  // console.log(N,arr)
    const distinctSums = [];
 
  const totalSubsets = Math.pow(2, N);

  for (let i = 0; i < totalSubsets; i++) {
    let sum = 0;
    for (let j = 0; j < N; j++) {
      if ((i & (1 << j)) !== 0) {
        sum += arr[j];
      }
    }
    distinctSums.push(sum);
  }

  distinctSums.sort((a, b) => a - b);
  console.log(distinctSums.join(" "));
}
function runProgram(input) {
// Write code here
input= input.trim().split('\n')
var N = +input[0]

  var arr = input[1].trim().split(" ").map(Number)
Distinct(N,arr)    
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

  