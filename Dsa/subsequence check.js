function Longest(N,M,A,B) {
    let index=0;
    let final=0;
    while(index<N){
        if(final == M){
            return false;
        }
        if(A[index]===B[final]){
            index++;
        }
        final++;
    }
    return true
  }
  function runProgram(input) {
   input = input.trim().split('\n')
    var tc = +input[0]
    line=1;
    for(let i=0;i<tc;i++){
        var [N,M] = input[line++].trim().split(" ").map(Number)
        var A = input[line++]
        var B = input[line++]
  Longest(N,M,A,B)  
  if(Longest(N,M,A,B) ){
      console.log("YES")
  }else{
      console.log("NO")
  }
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
  