function square(N,arr){
    let sq =[]
    for(let i=0;i<N;i++){
        sq.push([arr[i],Math.pow(arr[i],2)])
    }
   sq.sort((a,b)=>{
       return a[1]-b[1]
   })
   let res=[]
  for(let i=0;i<sq.length;i++){
      res.push(sq[i][0])
  }
  console.log(res.join(" "))
 }