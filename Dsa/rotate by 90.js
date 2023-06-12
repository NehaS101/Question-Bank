function rotateBy90(R, matrix){
    //write code here
  for(let i=R-1;i>=0;i--){
      let mat="";
      for(let j=0;j<R;j++){
          mat += matrix[j][i]+" ";
      }
      console.log(mat)
  }
}
