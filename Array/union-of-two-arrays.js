// https://www.geeksforgeeks.org/problems/union-of-two-arrays3538/1
// Union of two arrays

class Solution {
  //Function to return the count of number of elements in union of two arrays.
  doUnion(a, n, b, m) {
    let union = new Set();
    for (let i = 0; i < n; i++) union.add(a[i]);
    for (let j = 0; j < m; j++) union.add(b[j]);
    return union.size;
  }
}

const solution = new Solution();
console.time('doUnion')
console.log(solution.doUnion([1, 2, 3, 4, 5], 5, [1, 2, 3], 3));
console.timeEnd('doUnion')