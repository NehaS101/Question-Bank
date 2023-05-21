function Difference(N,K,arr){
  
    var flag="No";
    let i=0;
    let j=1;
         
        while(i<N &&j<N ){
              if(i!==j && arr[j] - arr[i] == K  ){
                  flag="Yes";
     break;
        }else if(arr[j] - arr[i] < K){
            j++;
        }else{
            i++;
        }
      
    }
    
    console.log(flag)
}
function runProgram(input){
   // Write Code Here
   input = input.trim().split('\n')
   var tc = +input[0]
   var line=1
   for(let i=0;i<tc;i++){
       var [N,K] = input[line].trim().split(" ").map(Number)
       line++
       var arr = input[line].trim().split(" ").map(Number)
       line++
    Difference(N,K,arr)
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