// https://www.geeksforgeeks.org/problems/move-all-negative-elements-to-end1813/1
// Move all negative elements to end

class Solution {
  segregateElements(arr, n) {
    let index = 0;

    for (let j = 0; j < n; j++) {
      let currVal = arr[index];
      if (currVal < 0) {
        arr.splice(index, 1);
        arr.push(currVal);
      } else {
        index++;
      }
    }

    return arr;
  }
}

const solution = new Solution();
console.time('segregateElements');
console.log(solution.segregateElements([1, -1, 3, 2, -7, -5, 11, 6], 8));
console.timeEnd('segregateElements');