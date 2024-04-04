// https://www.geeksforgeeks.org/problems/sort-an-array-of-0s-1s-and-2s4231/1
// Given an array which consists of only 0, 1 and 2. Sort the array without using any sorting algo

// Answer given - challenge failed
class Solution {
  sort012(a, n) {
    let low = 0, high = n - 1, mid = 0; // Initialize three pointers: low, mid, and high.
    while (mid <= high) { // Iterate until mid is greater than high.
      if (a[mid] === 0) { // If the element at mid is 0.
        let temp = a[low]; // Swap the element at low with the element at mid.
        a[low] = a[mid];
        a[mid] = temp;
        low++; // Increment low.
        mid++; // Increment mid.
      } else if (a[mid] === 1) { // If the element at mid is 1.
        mid++; // Increment mid.
      } else { // If the element at mid is 2.
        let temp = a[mid]; // Swap the element at mid with the element at high.
        a[mid] = a[high];
        a[high] = temp;
        high--; // Decrement high.
      }
    }

    return a;
  }
}

const solution = new Solution();
console.time('sort012')
console.log(solution.sort012([0, 2, 1, 2, 0], 5));
console.timeEnd('sort012')