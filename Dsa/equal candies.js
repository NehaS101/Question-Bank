function maxCandiesWithEqualWeight(candies) {
    let akhilSum = 0;
    let ankushSum = 0;
    let maxCandies = 0;
  
    for (let i = 0, j = candies.length - 1; i <= j; ) {
      if (akhilSum === ankushSum) {
        maxCandies = Math.max(maxCandies, j - i + 1);
        akhilSum += candies[i];
        ankushSum += candies[j];
        i++;
        j--;
      } else if (akhilSum < ankushSum) {
        akhilSum += candies[i];
        i++;
      } else {
        ankushSum += candies[j];
        j--;
      }
    }
  
    return maxCandies;
  }
  
  // Example usage:
  const candies = [1, 2, 3, 4, 5, 5, 4, 3, 2, 1];
  const maxCandies = maxCandiesWithEqualWeight(candies);
  console.log(maxCandies);
  