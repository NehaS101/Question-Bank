function Matrix(N,M,mat){
    //Enter code here
    let bag=""
    
    for(let i=0;i<N;i++){
     
    let max= -Infinity
        for(let j=0;j<M;j++){
            if(mat[i][j]>max){
              max=mat[i][j]
              
            }
            
        }
    
    bag += max + " ";
        
    }
    console.log(bag)
    
    }