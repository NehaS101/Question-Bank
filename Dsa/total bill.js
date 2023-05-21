function totalBill(N) {
    // Write code here
    let total_bill;
   if(N<=50 && N>=0){
       total_bill = 80 + N*3
   }
   else if(N>=51 || N<=150){
       total_bill =80 + 150 + (N-50)*5
   }
  if(N>=151){
       total_bill = 80+150 + 500 +(N-150)*10
   }
  
   console.log(Math.ceil(total_bill))
}
