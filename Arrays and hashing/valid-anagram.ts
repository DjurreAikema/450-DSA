// https://leetcode.com/problems/valid-anagram/description/
// 242. Valid Anagram
// Given two strings s and t, return true if t is an anagram of s, and false otherwise.

// Passed, 70ms, 53.81mb
function isAnagram(s: string, t: string): boolean {
  if (s.length != t.length) return false;

  const sCount = new Map<string, number>();
  const tCount = new Map<string, number>();

  for (let i: number = 0; i < s.length; i++) {
    const sChar: string = s.charAt(i);
    sCount.set(sChar, (sCount.get(sChar) || 0) + 1);
    const tChar: string = t.charAt(i);
    tCount.set(tChar, (tCount.get(tChar) || 0) + 1);
  }

  for (const [char, count] of sCount) {
    if (tCount.get(char) !== count) return false;
  }

  return true;
}

// Passed, 91ms, 56.16mb
function isAnagram1(s: string, t: string): boolean {
  let sArr: string[] = s.split("");
  let tArr: string[] = t.split("");

  return JSON.stringify(sArr.sort()) === JSON.stringify(tArr.sort());
}

console.log(isAnagram("anagram", "nagaram"));
console.log(isAnagram("rat", "car"));