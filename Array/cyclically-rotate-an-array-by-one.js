// https://www.geeksforgeeks.org/problems/cyclically-rotate-an-array-by-one2614/1
// Cyclically rotate an array by one

class Solution {
  rotate(arr, n) {
    arr.unshift(arr.pop());
    return arr;
  }
}

const solution = new Solution();
console.time('doUnion')
console.log(solution.rotate([1, 2, 3, 4, 5], 5));
console.timeEnd('doUnion')