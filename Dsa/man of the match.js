//Enter code here
function  Match(N,arr){
    let sum=0;
    let virat=0;
    let res=true;
   for(let i=0;i<N*6;i++){
       if(arr[i]% 2 !== 0 && res === true ){
           sum += arr[i]
           res=false
       }else if(res === true){
           sum += arr[i]
       }else if(arr[i]% 2 !== 0 && res === false){
           virat += arr[i]
           res = true;
       }else{
           virat += arr[i]
       }
   if((i+1) % 6 === 0 && res == true){
       res = false;
   }else if((i+1) % 6 === 0 && res == false){
       res = true;
   }
   }
   if(sum>virat){
       console.log("AB de Villiers")
   }else if( sum< virat){
       console.log("Virat Kohli")
   }else{
       console.log("Tie")
   }
}
   

function runProgram(input){
   // Write Code Here
   input=input.trim().split('\n')
    var tc = +input[0]
    line=1
    for(let i=0;i<tc;i++){
        var N = +input[line++]
        var arr = input[line++].trim().split(" ").map(Number)
        Match(N,arr)
        }
    
//   console.log(input)
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