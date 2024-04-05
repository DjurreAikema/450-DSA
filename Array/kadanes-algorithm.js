// https://www.geeksforgeeks.org/problems/kadanes-algorithm-1587115620/1
// Kadane's Algorithm

// WIP
class Solution {
  //Function to find the sum of contiguous subarray with maximum sum.
  maxSubarraySum(arr, N){
    let max = Number.NEGATIVE_INFINITY;
    let lastVal = 0;

    for (let i = 0; i < N; i++) {
      let currVal = lastVal + arr[i];
      if (currVal > max) max = currVal;
      lastVal = currVal;
    }

    return max;
  }
}

const solution = new Solution();
console.time('maxSubarraySum')
console.log(solution.maxSubarraySum([1, 2, 3, -2, 5], 5));
console.log(solution.maxSubarraySum([-1,-2,-3,-4], 4));
console.log(solution.maxSubarraySum([-10, -2, -3, -4], 4));
console.timeEnd('maxSubarraySum')