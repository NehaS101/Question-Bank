
function sumWithoutBorders(N, M, matrix){
    //write code here
    let bag=0;
  for(let i=0;i<N;i++){
      for(let j=0;j<M;j++){
          if(i==0 || i==N-1 || j==0 || j==M-1){
              continue;
          }else{
              bag += matrix[i][j];
          }
      }
     
  }
  console.log(bag)
}
