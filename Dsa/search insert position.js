function Insert(N,K,arr){
    let i=0;
    while(i<N){
        let ans = Math.floor((i+N)/2)
        if(arr[ans]<K){
            i = ans+1;
        }else{
            N = ans
        }
    }
    console.log(i)
}
function runProgram(input) {
  // Write code here
  input= input.trim().split('\n')
  var tc = +input[0]
  line=1;
  for(let i=0;i<tc;i++){
      var [N,K] = input[line++].trim().split(" ").map(Number)
      var arr = input[line++].trim().split(" ").map(Number)
    Insert(N,K,arr)  
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