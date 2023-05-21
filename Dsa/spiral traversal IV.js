//Enter code here
function Spiral(N,mat){
    let bag="";
   let t=0;
    let l=0;
    let r=mat[0].length-1;
    let b=N-1;
    let count=0;
    while(count<N*N){
        for(let i=b;i>=t;i--){
            bag += mat[i][b]+" "
            count++
        }
        b--;
        for(let i=b;i>=l;i--){
            bag += mat[t][i]+" "
            count++
        }
        l++;
        for(let i=l;i<=r;i++){
            bag += mat[i][t]+" "
            count++
        }
        t++;
        for(let i=t;i<=b;i++){
            bag += mat[r][i]+" "
            count++
        }
        r--;
    }
    
    console.log(bag)
}
function runProgram(input){
   // Write Code Here
   input = input.trim().split('\n')
   var tc =  +input[0]
   var line=1;
   for(let i=0;i<tc;i++){
       var N = +input[line]
       line++
       var mat=[]
       for(let i=0;i<N;i++){
           mat.push(input[line].trim().split(" ").map(Number))
           line++;
       }
       Spiral(N,mat)
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