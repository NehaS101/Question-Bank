function Even(N,arr){
    let container = "no"
    for(let i=0;i<N;i++){
        let bag=[]
        for(let j=i;j<N;j++){
            bag.push(arr[j])
            for(let k=0;k<bag.length;k++){
                if(bag[0]%2 == 0 && bag[bag.length-1]%2 ==  0){
              container = "yes"
                }
            }
        }
    }
    console.log(container)
}