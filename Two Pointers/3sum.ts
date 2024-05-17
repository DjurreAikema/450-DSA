// https://leetcode.com/problems/3sum/
// 15. 3Sum
// Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.

function threeSum(nums: number[]): number[][] {

  nums.sort((a, b) => a - b);
  const map: { [key: string]: number } = {};

  for (let i = 0; i < nums.length - 2; i++) {
    // If I > 0 then the sum cant be 0
    if (nums[i] > 0) continue;
    // Skip duplicate numbers
    if (i > 0 && nums[i] === nums[i - 1]) continue;

    // Initialize pointers
    let leftPointer: number = i + 1;
    let rightPointer: number = nums.length - 1;

    while (leftPointer < rightPointer) {
      const sum: number = nums[i] + nums[leftPointer] + nums[rightPointer];

      if (sum === 0) {
        const result: string = JSON.stringify([nums[i], nums[leftPointer], nums[rightPointer]]);
        if (!(result in map)) map[result] = 1;
        leftPointer++;
      } else if (sum < 0) {
        leftPointer++;
      } else {
        rightPointer--;
      }
    }
  }

  return Object.keys(map).map((item: string) => JSON.parse(item));
}

// Passed, 202ms, 70.13mb
function threeSum2(nums: number[]): number[][] {

  nums.sort((a, b) => a - b);
  const map: { [key: string]: number } = {};

  for (let i = 0; i < nums.length - 2; i++) {
    // Skip duplicate numbers
    if (i > 0 && nums[i] === nums[i - 1]) continue;

    // Initialize pointers
    let leftPointer: number = i + 1;
    let rightPointer: number = nums.length - 1;

    while (leftPointer < rightPointer) {
      const sum: number = nums[i] + nums[leftPointer] + nums[rightPointer];

      if (sum === 0) {
        const result: string = JSON.stringify([nums[i], nums[leftPointer], nums[rightPointer]]);
        if (!(result in map)) map[result] = 1;
        leftPointer++;
      } else if (sum < 0) {
        leftPointer++;
      } else {
        rightPointer--;
      }
    }
  }

  return Object.keys(map).map((item: string) => JSON.parse(item));
}


// Failed
function threeSum1(nums: number[]): number[][] {

  const answerMap: Map<string, number[]> = new Map<string, number[]>()

  nums.sort((a, b) => a - b);

  for (let i: number = 0; i < nums.length; i++) {
    const currNum: number = nums[i];

    let solved: boolean = false;
    let leftPointer: number = 0;
    let rightPointer: number = nums.length - 1;
    let sum: number = -Infinity;

    while (!solved) {
      if (leftPointer != i && rightPointer != i)
        sum = currNum + nums[leftPointer] + nums[rightPointer];

      if (sum === 0) {
        solved = true;
        const answerArr: number[] = [nums[leftPointer], nums[i], nums[rightPointer]];
        answerArr.sort((a, b) => a - b);
        answerMap.set(answerArr.toString(), answerArr);
      } else if (sum > 0 && rightPointer > 0 && rightPointer > leftPointer + 1) {
        rightPointer--;
      } else if (sum < 0 && leftPointer < nums.length && leftPointer < rightPointer) {
        leftPointer++
      } else {
        break;
      }
    }
  }

  return [...answerMap.values()];
}

console.log(threeSum([-1, 0, 1, 2, -1, -4]));
console.log(threeSum([0, 1, 1]));
console.log(threeSum([0, 0, 0]));
console.log(threeSum([-1, 0, 1, 2, -1, -4, -2, -3, 3, 0, 4])); // Expected [[-4,0,4],[-4,1,3],[-3,-1,4],[-3,0,3],[-3,1,2],[-2,-1,3],[-2,0,2],[-1,-1,2],[-1,0,1]]