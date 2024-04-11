// https://leetcode.com/problems/two-sum/description/
// 1. Two Sum
// Given an array of integers 'nums' and an integer 'target', return indices of the two numbers such that they add up to target.

// Passed, 61ms, 53.24mb
function twoSum(nums: number[], target: number): number[] {
  const numsMap: Map<number, number> = new Map<number, number>();

  for (let i: number = 0; i < nums.length; i++) {
    const requiredNum: number = target - nums[i];
    if (numsMap.has(requiredNum)) return [numsMap.get(requiredNum)!, i];
    numsMap.set(nums[i], i);
  }

  return [];
}

console.log(twoSum([2, 7, 11, 15], 9));
console.log(twoSum([3, 2, 4], 6));
console.log(twoSum([3, 3], 6));