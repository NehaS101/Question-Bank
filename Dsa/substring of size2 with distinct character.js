   let arr = [];
  const n = s.length;
for(let i=0;i<n-2;i++){
  let char1 = s[i];
  let char2 = s[i+1];
  let char3 = s[i+2];
  if(char1 !==char2 && char2!==char3 && char3!==char1){
    arr.push(char1+char2+char3)
  }
}
  return arr.length