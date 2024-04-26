// https://leetcode.com/problems/product-of-array-except-self/
// 238. Product of Array Except Self
// Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].

// Passed, 113ms, 64.22mb
function productExceptSelf(nums: number[]): number[] {

  let resultArr: number[] = [];

  let currProduct: number = 1;
  for (let i = 0; i < nums.length; i++) {
    const num: number | undefined = nums[i - 1];
    if (num !== undefined) currProduct = currProduct * num;
    resultArr[i] = currProduct;
  }

  nums.reverse();
  resultArr.reverse();
  currProduct = 1;
  for (let i = 0; i < nums.length; i++) {
    const num: number | undefined = nums[i - 1];
    if (num !== undefined) currProduct = currProduct * num;
    resultArr[i] = resultArr[i] * currProduct;
  }

  return resultArr.reverse();
}

console.log(productExceptSelf([1, 2, 3, 4]))
console.log(productExceptSelf([-1, 1, 0, -3, 3]))