//Enter code here
function Front(K,arr){
    var N= arr.length
    arr.sort((a,b)=>{return a-b})
    for(let i=0;i<N-1;i++){
        if(K<arr[0]){
            console.log("Front", arr[0])
            return
        }else if(K>arr[N-1]){
            console.log(arr[N-1],"Last")
            return
        }else if(arr[i]<K && arr[i+1]>K){
            console.log(arr[i],arr[i+1])
        }
        
        
    }

}
function runProgram(input){
   // Write Code Here
   input=input.trim().split('\n')
   var tc = +input[0]
   line=1
   for(let i=0;i<tc;i++){
       var K = +input[line]
       line++
       var arr = input[line].trim().split(" ").map(Number)
       line++
     Front(K,arr)  
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