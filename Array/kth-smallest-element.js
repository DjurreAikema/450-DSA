// https://www.geeksforgeeks.org/problems/kth-smallest-element5635/1

class Solution {
  kthSmallest(arr, l, r, k) {
    return arr.sort(function (a, b) {
      return a - b
    })[k - 1];
  }
}

const solution = new Solution();
console.log(solution.kthSmallest([7, 10, 4, 3, 20, 15], 0, 5, 3));