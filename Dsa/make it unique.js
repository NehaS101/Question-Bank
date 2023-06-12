function make(Str){
    //Enter code here
    
    
    let N=Str.length;
    let obj={};
    for(let i=0;i<N;i++){
        if(obj[Str[i]]==undefined){
            obj[Str[i]]=1;
            
            }
        
    }
    
    let bag="";
    for(let key in obj){
        if(key!==" "){
        bag+=key;    
        }
        
    }
    console.log(bag);
    
    }
    function runProgram(input){
       // Write Code Here
      var Str = input.toString()
    
     
        make(Str)
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