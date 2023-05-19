function findMatching(n,m,str,pat){
    // write code here
  let flag=false;
  let bag="";
  for(let i=0;i<m;i++){
      bag += str[i]
  }
  if(bag==pat){
      flag=true;
  }
    for(let i=m;i<n;i++){
        bag +=str[i]
        bag = bag.slice(1)
        // console.log(bag)
        if(bag==pat){
            flag=true;
            break;
        }
    }
    if(flag===true){
        console.log("Yes")
    }else{
        console.log("No")
    }
}