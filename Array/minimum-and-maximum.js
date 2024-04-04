class Solution {
  static getMinMax(arr, n) {
    let min = Number.POSITIVE_INFINITY;
    let max = Number.NEGATIVE_INFINITY;

    arr.forEach((number) => {
      if (number < min) min = number;
      if (number > max) max = number;
    });

    return [min, max];
  }
}

console.log(Solution.getMinMax([3, 2, 1, 56, 10000, 167], 5));