function  Longest(n,k,arr) {
    let i = 0;
  let j = 0;
  let maxLength = 0;
  let Sum = 0;

  while (j < n) {
    Sum += arr[j];

    while (Sum > k) {
      Sum -= arr[i];
      i++;
    }

    const currentLength = j - i + 1;
    maxLength = Math.max(maxLength, currentLength);

    j++;
  }

  console.log(maxLength);
}

function runProgram(input) {
  // Write code here
  input=input.trim().split('\n')
  var tc= +input[0]
  line=1
  for(let i=0;i<tc;i++) {
      var [n,k]= input[line++].trim().split(" ").map(Number)
      var arr = input[line++].trim().split(" ").map(Number)
    Longest(n,k,arr)  
  }
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
