function StringPower(N,str){
    //Enter code here
    let x=0;
    let y=0;
    for(let i=0;i<N;i++){
        if(str[i] == "a" || str[i]== "e" || str[i] =="i" ||str[i] =="o" || str[i]=="u"){
            x++;
        }else{
            y++;
        }
    }
    console.log(3*x+5*y);
    
    
    }
    function runProgram(input){
       // Write Code Here
       input = input.trim().split('\n')
      let N= +input[0]
      let str = input[1]
     StringPower(N,str)
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