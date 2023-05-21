//Enter code here
function Motu(N){
    var motu = Math.floor(N/5)
   var patlu = N%5
   if(patlu == 4 || patlu == 3 || patlu == 2 || patlu ==1){
       
       motu++
   }
   return motu
//   console.log(patlu)
}
function runProgram(input){
   // Write Code Here
   var N = +input
   Motu(N)
   console.log(Motu(N))
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