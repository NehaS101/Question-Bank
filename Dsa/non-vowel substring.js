function nonVowelSubString(N, str){
    // write code here
    let max=0;
       for(let i=0;i<N;i++){
           if(str[i]!=="a" && str[i]!=="e" && str[i]!=="i" && str[i]!=="o" &&str[i]!=="u"){
           let count=1;
           for(j=i+1;j<N;j++){
               if(str[j]!=="a" && str[j]!=="e" && str[j]!=="i" && str[j]!=="o" &&str[j]!=="u"){
            count++;
           }else{
               break;
           }
           }
           if(count>max){
               max=count;
           }
   }
}
   console.log(max)
    
        
}
