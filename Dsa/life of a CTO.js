//Enter code here
function Cto(N,arr){
    l=0;h=N-1
    let ans=-1
    // if(arr[0] == 1){
    //         return 0
    //     }
    while(l<=h){
        mid = l+Math.floor((h-l)/2)
        
        if(arr[mid] == 1){
            ans= mid
            h=mid-1
        }else if(arr[mid]<1){
            l=mid+1
        }else{
            h=mid-1
        }
    }
    return ans
}
function runProgram(input){
   // Write Code Here
   input=input.trim().split('\n')
   var N = +input[0]
   var arr = input[1].trim().split(" ").map(Number)
  Cto(N,arr) 
  console.log(Cto(N,arr))
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