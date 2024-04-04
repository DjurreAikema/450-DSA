// https://www.geeksforgeeks.org/problems/sort-an-array-of-0s-1s-and-2s4231/1
// Given an array which consists of only 0, 1 and 2. Sort the array without using any sorting algo

// TODO
class Solution {

  sort012(arr, N) {
    [...arr].forEach((number, index) => {
      if (number !== 1) arr.splice(index, 1);
      if (number === 0) arr.unshift(0);
      if (number === 2) arr.push(2);
    });

    return arr;
  }
}

const solution = new Solution();
console.time('sort012')
console.log(solution.sort012([0, 2, 1, 2, 0], 5));
console.timeEnd('sort012')