function compareTshirtSizes(a, b) {
    // Calculate the size score for T-shirt size 'a'
    const aScore = getSizeScore(a);
    
    // Calculate the size score for T-shirt size 'b'
    const bScore = getSizeScore(b);
    
    // Compare the size scores
    if (aScore < bScore) {
      return '<';
    } else if (aScore > bScore) {
      return '>';
    } else {
      return '=';
    }
  }
  
  function getSizeScore(size) {
    let score = 0;
    
    // Compare the size based on the presence of 'X'
    if (size.includes('X')) {
      score += 2;
    }
    
    // Compare the size based on the ordering of 'X' relative to 'S' and 'L'
    const sIndex = size.indexOf('S');
    const lIndex = size.indexOf('L');
    const xIndex = size.indexOf('X');
    
    if (xIndex < sIndex) {
      score -= 2;
    }
    
    if (xIndex > lIndex) {
      score += 2;
    }
    
    return score;
  }
  
  // Example usage
  const a = 'SXXL';
  const b = 'XSL';
  const result = compareTshirtSizes(a, b);
  console.log(result); // Output: '>'
  