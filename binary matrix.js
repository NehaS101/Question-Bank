function binaryMatrix(N,M, matrix) {
    //write code here
    for(let i=0;i<N;i++){
        let mat="";
        for(let j=0;j<M;j++){
            if(matrix[i][j] == 0){
                matrix[i][j] = 1;
            }else if(matrix[i][j] == 1){
                matrix[i][j] = 0;
            }
            mat += matrix[i][j]+" ";
        }
        console.log(mat)
    }
  }
  