// https://leetcode.com/problems/group-anagrams/
// 49. Group Anagrams
// Given an array of strings 'strs', group the anagrams together. You can return the answer in any order.

// Failed - too slow
function groupAnagrams(strs: string[]): string[][] {
  let anagramsArr: string[][] = [];

  for (let i: number = 0; i < strs.length; i++) {
    const currentString: string = strs[i];

    if (anagramsArr.length == 0) {
      anagramsArr.push([currentString]);
      continue;
    }

    let foundGroup: boolean = false;
    for (let j: number = 0; j < anagramsArr.length; j++) {
      if (isAnagram(currentString, anagramsArr[j][0])) {
        anagramsArr[j].push(currentString);
        foundGroup = true;
        break;
      }
    }
    if (!foundGroup) anagramsArr.push([strs[i]]);
    else foundGroup = false;
  }

  return anagramsArr;
}

function isAnagram(s: string, t: string): boolean {
  if (s.length != t.length) return false;

  // Create two maps to keep track of the number of times a letter appears in the string
  const sCount = new Map<string, number>();
  const tCount = new Map<string, number>();

  // Loop over both strings, this can be done in one loop because we're sure the strings are the same length
  for (let i: number = 0; i < s.length; i++) {
    const sChar: string = s.charAt(i);
    sCount.set(sChar, (sCount.get(sChar) || 0) + 1);

    const tChar: string = t.charAt(i);
    tCount.set(tChar, (tCount.get(tChar) || 0) + 1);
  }

  // Compare the maps
  for (const [char, count] of sCount) {
    if (tCount.get(char) !== count) return false;
  }

  return true;
}

console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]))
console.log(groupAnagrams([""]))
console.log(groupAnagrams(["a"]))