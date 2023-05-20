function printDistinctSubsetSums(nums) {
    const distinctSums = [];
    const n = nums.length;
    const totalSubsets = Math.pow(2, n);
  
    for (let i = 0; i < totalSubsets; i++) {
      let sum = 0;
      for (let j = 0; j < n; j++) {
        if ((i & (1 << j)) !== 0) {
          sum += nums[j];
        }
      }
      distinctSums.push(sum);
    }
  
    distinctSums.sort((a, b) => a - b);
    console.log(distinctSums);
  }
  
  // Example usage:
  const nums = [1, 2, 2];
  printDistinctSubsetSums(nums);
  