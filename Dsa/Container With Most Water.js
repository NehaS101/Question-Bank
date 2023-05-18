Input: height = [1,8,6,2,5,4,8,3,7]
Output: 49
Explanation: //The above vertical lines are represented by array [1,8,6,2,5,4,8,3,7]. 
//In this case, the max area of water (blue section) the container can contain is 49.
var maxArea = function(height) {
    let ans = 0;
    let i = 0;
    let j = height.length-1;
    let res=0;
     while (i < j) {
           if (height[i] <= height[j]) {
               res = height[i] * (j - i);
               i++;
           } else {
               res = height[j] * (j - i);
               j--;
           }
           if (res > ans) ans = res;
       }
       return ans;
};