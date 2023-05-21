function Remove(N,S){
   
    var res=""
     var stack=[]
     for(let x=0;x<N;x++){
         if(x==0){
             stack.push(S[x])
         }else if(stack[stack.length-1] !== S[x]){
              stack.push(S[x])
         }else if( stack[stack.length-1] === S[x]){
             stack.pop()
         }
     }
     console.log(stack.join(""))
  }
  function runProgram(input){
     // Write Code Here
     input = input.trim().split('\n')
     var tc = +input[0]
     var line=1;
     for(let i=0;i<tc;i++){
         var N = input[line];
         line++;
         var S = input[line];
         line++;
        
       Remove(N,S);
     
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