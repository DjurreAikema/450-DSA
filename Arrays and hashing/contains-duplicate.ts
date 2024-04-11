// https://leetcode.com/problems/contains-duplicate/
// 217. Contains Duplicate
// Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.


// Passed, 96ms, 61.8mb
function containsDuplicate(nums: number[]): boolean {
  const set: Set<number> = new Set(nums);
  return set.size < nums.length;
}

// Passed, 83ms, 63.8mb
function containsDuplicate1(nums: number[]): boolean {
  const mySet: Set<number> = new Set();
  let lastSize: number = 0;

  for (let i = 0; i < nums.length; i++) {
    mySet.add(nums[i]);
    if (mySet.size == lastSize) return true;
    lastSize = mySet.size;
  }

  return false;
}

console.log(containsDuplicate([1, 2, 3, 1]));
console.log(containsDuplicate([1, 2, 3, 4]));
console.log(containsDuplicate([1, 1, 1, 3, 3, 4, 3, 2, 4, 2]));