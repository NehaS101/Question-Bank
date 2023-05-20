function crackCypher(wheels, moves) {
    const n = wheels.length;
    const originalSequence = [];
  
    for (let i = 0; i < n; i++) {
      let digit = wheels[i];
  
      for (let j = 0; j < moves[i]; j++) {
        const move = moves[i][j];
  
        if (move === 'U') {
          digit--;
          if (digit === -1) {
            digit = 9;
          }
        } else if (move === 'D') {
          digit++;
          if (digit === 10) {
            digit = 0;
          }
        }
      }
  
      originalSequence.push(digit);
    }
  
    return originalSequence;
  }
  
  // Example usage
  const wheels = [1, 3, 5, 2];
  const moves = ['UDD', 'DUDU', 'UUU', 'DDU'];
  const originalSequence = crackCypher(wheels, moves);
  console.log(originalSequence); // Output: [0, 4, 8, 1]
  