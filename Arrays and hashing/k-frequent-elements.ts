// https://leetcode.com/problems/top-k-frequent-elements/description/
// 347. Top K Frequent Elements
// Given an integer array nums and an integer k, return the k most frequent elements. You may return the answer in any order.

// Passed, 71,s, 54.55mb
function topKFrequent(nums: number[], k: number): number[] {
  const numCountMap: Map<number, number> = new Map<number, number>();

  for (const num of nums) {
    numCountMap.set(num, (numCountMap.get(num) || 0) + 1);
  }

  const mapSort = new Map([...numCountMap.entries()].sort((a, b) => b[1] - a[1]).slice(0, k));
  return [...mapSort.keys()];
}

console.log(topKFrequent([1, 1, 1, 2, 2, 3], 2))
console.log(topKFrequent([1, 1, 2, 3, 3, 3], 2))
console.log(topKFrequent([1], 1))