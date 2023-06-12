function BagofLetter(N,bag,M,A){
    //Enter code here
    let count=0;
    for(let i=0;i<M;i++){
        for(let j=0;j<N;j++){
            if(bag[j] == A[i]){
                count++;
                break;
            }
        }
    }
        if(count == M){
            console.log("Yes")
        }else{
            console.log("No")
        }
    }
    function runProgram(input){
       // Write Code Here
       input=input.trim().split('\n')
       let N= +input[0];
       let M= +input[2];
       let bag = input[1].split("");
       let A = input[3].split("");
       BagofLetter(N,bag,M,A);
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