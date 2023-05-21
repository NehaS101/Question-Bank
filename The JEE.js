function theJEE(phyS1, chemS1, mathsS1, phyS2, chemS2, mathsS2) {
    //Writ
let total1 =  phyS1 + chemS1 + mathsS1;
let total2 = phyS2 + chemS2 + mathsS2;
    if(total1>total2){
        console.log("First");
    }else if(total2>total1){
        console.log("Second");
    }else{
            if(mathsS1>mathsS2){
            console.log("First");
            }else if(mathsS2>mathsS1){
            console.log("Second");
            }else{
                if(phyS1>phyS2){
                    console.log("First");
                }else if(phyS2>phyS1){
                     console.log("Second");
                }
            }
    }
}
