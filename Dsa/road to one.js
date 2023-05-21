function Road(N,c){
    if(N==1){
        return c
    }
    if(N%2 == 0){
        return Road(N/2,c+1)
    }
    if(N%3==0){
        return Road(2*N/3,c+1)
    }
    if(N%5==0){
        return Road(4*N/5,c+1)
    }
      return -1
  }
  function runProgram(input){
     // Write Code Here
     input=input.trim().split('\n')
     var tc = +input[0]
     line=1;
     for(let i=0;i<tc;i++){
         var c=0
         var N = +input[line]
         line++
         Road(N,c)
         console.log(Road(N,c))
     }
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
  
  