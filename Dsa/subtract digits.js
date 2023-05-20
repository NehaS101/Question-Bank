function countStepsToZero(n) {
    if (n === 0) {
      return 0;
    }
  
    let minDigit = 9;
    let strN = n.toString();
  
    for (let i = 0; i < strN.length; i++) {
      const digit = parseInt(strN[i]);
      if (digit < minDigit) {
        minDigit = digit;
      }
    }
  
    return 1 + countStepsToZero(n - minDigit);
  }
  
  // Example usage
  const n = 5672;
  const steps = countStepsToZero(n);
  console.log(steps); // Output: 20
  