// https://www.geeksforgeeks.org/problems/kadanes-algorithm-1587115620/1
// Kadane's Algorithm

// Passed
class Solution {
  //Function to find the sum of contiguous subarray with maximum sum.
  maxSubarraySum(arr, N){
    let maxSum = Number.NEGATIVE_INFINITY;
    let currentSum = 0;

    for (let i = 0; i < N; i++) {
      currentSum = currentSum + arr[i];
      if (maxSum < currentSum) maxSum = currentSum;
      if (currentSum < 0) currentSum = 0;
    }

    return maxSum;
  }
}

const solution = new Solution();
console.time('maxSubarraySum')
console.log(solution.maxSubarraySum([1, 2, 3, -2, 5], 5));
console.log(solution.maxSubarraySum([-1,-2,-3,-4], 4));
console.log(solution.maxSubarraySum([-10, -2, -3, -4], 4));
console.timeEnd('maxSubarraySum')