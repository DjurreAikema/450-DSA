// https://leetcode.com/problems/longest-consecutive-sequence/description/
// 128. Longest Consecutive Sequence
// Given an unsorted array of integers nums, return the length of the longest consecutive elements sequence.

// Passed, 104ms, 73.78mb
function longestConsecutive(nums: number[]): number {
  // Filter out trick cases
  const length: number = nums.length;
  if (!length) return 0;
  if (length === 1) return 1;

  // Create a set to get rid of duplicate numbers and faster access to the numbers afterward
  const numSet = new Set<number>(nums);

  // Find the numbers that start a sequence
  const sequenceStarters: number[] = [];
  for (const num of numSet) {
    const prevNum: number = num - 1; // If it has a prevNum it cant be a sequence starter
    const nextNum: number = num + 1; // If it doest have a nextNum it also cant be a sequence starter

    if (!numSet.has(prevNum) && numSet.has(nextNum))
      sequenceStarters.push(num);
  }

  let longest: number = 1;
  // Count the longest sequence
  for (const num of sequenceStarters) {
    let currLength: number = 1;
    let nextNum: number = num + 1;

    while (numSet.has(nextNum)) {
      currLength++;
      nextNum++;
    }

    if (currLength > longest) longest = currLength;
  }

  return longest;
}

console.log(longestConsecutive([100, 4, 200, 1, 3, 2]))
console.log(longestConsecutive([0, 3, 7, 2, 5, 8, 4, 6, 0, 1]))