// https://leetcode.com/problems/valid-anagram/description/
// 242. Valid Anagram
// Given two strings s and t, return true if t is an anagram of s, and false otherwise.


// Passed, 91ms, 56.16mb
function isAnagram(s: string, t: string): boolean {
  let sArr: string[] = s.split("");
  let tArr: string[] = t.split("");

  return JSON.stringify(sArr.sort()) === JSON.stringify(tArr.sort());
}

console.log(isAnagram("anagram", "nagaram"));
console.log(isAnagram("rat", "car"));