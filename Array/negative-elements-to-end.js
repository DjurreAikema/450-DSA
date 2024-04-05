// https://www.geeksforgeeks.org/problems/move-all-negative-elements-to-end1813/1
// Move all negative elements to end

// Failed
class Solution {
  // Correct answer
  segregateElements(arr, n) {
    // Create an empty array to store result
    let temp = [];

    // Traversal array and store +ve element in temp array
    for (let i = 0; i < n; i++) {
      if (arr[i] >= 0) {
        temp.push(arr[i]);
      }
    }

    // If array contains all positive or all negative.
    if (temp.length === n || temp.length === 0) {
      return;
    }

    // Store -ve element in temp array
    for (let i = 0; i < n; i++) {
      if (arr[i] < 0) {
        temp.push(arr[i]);
      }
    }

    // Copy contents of temp[] to arr[]
    for (let i = 0; i < n; i++) {
      arr[i] = temp[i];
    }
  }


  // My answer - 1110/1111 passed: too slow
  // Your method uses the splice method to remove elements from the array and the push method to add them to the end.
  // Both splice and push can potentially cause the JavaScript engine to reindex the array, which is an expensive operation.
  // In the worst-case scenario, this could lead to a time complexity of O(n^2), as for each negative number, the array is reindexed.
  // Therefore, the "correct answer" is faster because it avoids expensive array reindexing operations by using a separate array to store the result.
  segregateElements1(arr, n) {
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
solution.segregateElements([1, -1, 3, 2, -7, -5, 11, 6], 8);
console.timeEnd('segregateElements');