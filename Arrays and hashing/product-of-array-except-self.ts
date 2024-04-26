// https://leetcode.com/problems/product-of-array-except-self/
// 238. Product of Array Except Self
// Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].

// Passed, 104ms, 66.25mb
function productExceptSelf(nums: number[]): number[] {
  const n: number = nums.length;
  const resultArr: number[] = new Array(n)

  resultArr[0] = 1;
  for (let i = 1; i < n; i++) {
    resultArr[i] = resultArr[i - 1] * nums[i - 1];
  }

  let rightProduct: number = 1;
  for (let i = n - 1; i >= 0; i--) {
    resultArr[i] *= rightProduct;
    rightProduct *= nums[i];
  }

  return resultArr;
}

// Passed, 113ms, 64.22mb
function productExceptSelf2(nums: number[]): number[] {

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