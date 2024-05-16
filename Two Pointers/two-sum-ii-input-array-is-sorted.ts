// https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/description/
// 167. Two Sum II - Input Array Is Sorted

// Passed, 48ms, 52.80mb
function twoSum(numbers: number[], target: number): number[] {
  const possibleNumsMap: Map<number, number> = new Map<number, number>();

  for (let i: number = 0; i < numbers.length; i++) {
    const requiredNum: number = target - numbers[i];
    if (possibleNumsMap.has(requiredNum)) return [possibleNumsMap.get(requiredNum)!, i + 1];
    possibleNumsMap.set(numbers[i], i + 1);
  }

  return [];
}

console.log(twoSum([2, 7, 11, 15], 9));
console.log(twoSum([2, 3, 4], 6));
console.log(twoSum([-1, 0], -1));
console.log(twoSum([0,0,3,4], 0));