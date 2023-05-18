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