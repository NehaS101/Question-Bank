var getHint = function(secret, guess) {
    let bull = 0;
    let cow = 0;
    let arr = new Array(10).fill(0);
    let guess2 = [];
    for(let i = 0 ; i< secret.length; i++){
        if(secret[i] === guess[i]){
            bull++;
        }
        else{
            guess2.push(+guess[i]);
            arr[+secret[i]]++;
        }
    }
    
    for(let i = 0 ; i< guess2.length; i++){
        if(arr[guess2[i]] > 0){
            cow++;
            arr[guess2[i]]--;
        }
    }
    
    return `${bull}A${cow}B`;
};