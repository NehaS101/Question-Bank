function Noddy(N,X,arr){
    let count1=0;
    let count2=0;
   let  Max_Score=0;
    for(let key of arr){
        if(key<=X){
            count1++
        }else{
            count2++
        if(count2<2){
            Max_Score = Math.max(count1,Max_Score)
        }else{
            count1=0
            if(count2>1){
                break;
            }
            
        }  
        }
          
        
        Max_Score = Math.max(count1,Max_Score)
    }
    console.log(Max_Score)
}
function runProgram(input) {
  // Write code here
  input =input.trim().split('\n')
  var [N,X] = input[0].trim().split(" ").map(Number)
  var arr = input[1].trim().split(" ").map(Number)
 Noddy(N,X,arr) 
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
