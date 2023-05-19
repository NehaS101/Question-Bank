function maximizeNumber(number, additionalDigit) {
    const strNumber = number.toString();
    const n = strNumber.length;
    let result = "";
  
    // Case 1: additionalDigit is larger than the leftmost digit
    if (additionalDigit > Number(strNumber[0])) {
      result = additionalDigit + strNumber;
    }
    // Case 2: additionalDigit is smaller or equal to the leftmost digit
    else {
      let index = 0;
      while (index < n && additionalDigit <= Number(strNumber[index])) {
        index++;
      }
      result = strNumber.slice(0, index) + additionalDigit + strNumber.slice(index);
    }
  
    return result;
  }
  
  // Example usage
  const number = 9876;
  const additionalDigit = 5;
  const maximizedNumber = maximizeNumber(number, additionalDigit);
  console.log(maximizedNumber); // Output: 59876
  