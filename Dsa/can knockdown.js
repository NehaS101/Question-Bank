function  CanKnockdown(n,arr){
    let res=[]
    for(let i=0;i<n;i++){
        res.push([arr[i],i+1])
    }
    // console.log(res)
    res.sort((a,b)=>b[0]-a[0])
    
    let total=0;
    let count=0;
    for(let i=0;i<res.length;i++){
        total += res[i][0]*count+1;
        count++;
    }
    let final=res[0][1];
    for(let i=1;i<res.length;i++){
        final += " "+res[i][1]
    }
    console.log(total)
    console.log(final)
    // console.log(count)
}