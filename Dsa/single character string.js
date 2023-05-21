function single(N,str){
    let c1=0,c2=0;
    for(let i=0;i<N;i++){
        if(str[i]=="a"){
            str[i]="b"
            c2++;
        }
        if(str[i]=="b"){
            str[i]="a"
            c1++;
        }
    }
    if(c1<c2){
        console.log(c1)
    }else{
        console.log(c2)
    }
}