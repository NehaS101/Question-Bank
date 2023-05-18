Input: nums = [1,0,-1,0,-2,2], target = 0
Output: [[-2,-1,1,2],[-2,0,0,2],[-1,0,0,1]]
var fourSum = function (nums, target) {
    var n = nums.length - 1,
      sum = 0,
      result = [];
  
    nums.sort((a, b) => a - b);
  
    for (let i = 0, j = i + 1, left = j + 1, right = n; i < n - 2; j = ++i + 1) {
      // condition for neglating duplicates
      if (nums[i] === nums[i - 1]) continue;
      
      // Using two pointers concept as used for 3Sum
      for (left = j + 1, right = n; j < n - 1; left = ++j + 1, right = n) {
        // condition for neglating duplicates
        if (nums[j] === nums[j - 1] && j !== i + 1) continue;
  
        while (left < right) {
          sum = nums[i] + nums[j] + nums[left] + nums[right];
  
          if (sum === target) {
            result.push([nums[i], nums[j], nums[left], nums[right]]);
            
            // loop for neglating duplicates
            while (nums[left] === nums[++left]);
            while (nums[right] === nums[--right]);
            
          } else if (sum > target) right--;
          else left++;
        }
      }
    }
  
    return result;
  };