let maxsublen='';

for(let i=0;i<s.length;i++){
    for(let j=i;j<s.length;j++){
        let sub = s.substring(i,j+1);
        if(check(sub) && sub.length>maxsublen.length){
            maxsublen=sub
        }
    }
}
return maxsublen;
 function check(sub){
    for(let i=0;i<sub.length;i++){
        let char=sub[i]
        if(!sub.includes(char.toLowerCase()) || !sub.includes(char.toUpperCase())){
            return false;
        }
    }
    return true;
}