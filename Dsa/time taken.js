//Enter co
function  Time(N,K,arr){
    let i=0;
    let count=0;
    while(i<N){
        
        if(i<=K){
          count += Math.min(arr[i],arr[K])
        }else{
            count += Math.min(arr[i],arr[K]-1)
        }
        i++
    }
    return count
}
function runProgram(input){
   // Write Code Here
   input = input.trim().split('\n')
    var [N,K] = input[0].trim().split(" ").map(Number)
    var arr = input[1].trim().split(" ").map(Number)   

    Time(N,K,arr)
   let result = Time(N,K-1,arr)
   console.log(result)
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