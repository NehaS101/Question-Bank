function ticTacToe(matrix){
    //write code here
    let flag = "Tie"
    for(let i=0;i<matrix.length;i++){
        let bag=""
        for(let j=0;j<matrix.length;j++){
            bag += matrix[i][j]
        }
      if(bag === "xxx"){
          flag = "x"
      }else{
          flag = "o"
      }
    }        
    let Rdiag=""
    let Ldiag=""
           for(let i=0;i<matrix.length;i++){
               for(let j=0;j<matrix.length;j++){
                  if(i==j){
                      Ldiag += matrix[i][j]
                  }
                 
              if(Ldiag == "xxx"){
                   flag ="x"
                }else {
                   flag = "o"
            }
            if(i+j == matrix.length-1){
            Rdiag += matrix[i][j]
                
            }
            if(Rdiag === "xxx"){
                flag = "x"
            }else if(Rdiag === "o"){
                flag = "o"
            }
               }
           }
           for(let i=0;i<matrix.length;i++){
               if(matrix[i].join("") === "xxx"){
                   flag = "x"
               }
                if(matrix[i].join("") === "ooo"){
                   flag = "o"
               }
           }
    console.log(flag)
    
}
