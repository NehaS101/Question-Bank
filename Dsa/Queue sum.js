

function runProgram(input){
    // Write Code Here
    input=input.trim().split('\n')
    let count=0;
    let str=[];
    for(let i=1;i<input.length;i++){
        let [x,y]=input[i].split(" ")
        if(x==1){
            str.push(y);
        }else{
            if(x==2){
                if(str.length!=0){
                    let x =+(str.shift());
                    count =count+x
                }else{
                    count=count-1
                }
            }
    }
    }
    console.log(count)
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