function Marks(N,arr){
   
    let stack=[];
    stack.push(arr[N-1])
    
    for(let i = N-2;i>=0;i--){
        let ans = stack.pop()
        stack.push(ans)
        if(arr[i]>= ans){
            stack.push(arr[i])
        }
    }
    console.log(stack.reverse().join(" "))
    
}
function runProgram(input) {
  // Write code here
  input = input.trim().split('\n')
  var N = +input[0]
  var arr = input[1].trim().split(" ").map(Number)
  Marks(N,arr)
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
