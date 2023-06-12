function rotateBy180(N, matrix){
    //write code here
  for(let i=N-1;i>=0;i--){
      let mat="";
      for(let j=N-1;j>=0;j--){
          mat+= matrix[i][j]+" ";
      }
       console.log(mat)
  }
 
}
