// https://leetcode.com/problems/valid-palindrome/description/
// 125. Valid Palindrome
// A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters,
// it reads the same forward and backward. Alphanumeric characters include letters and numbers.
// Given a string s, return true if it is a palindrome, or false otherwise.

// Passed, 78ms, 54.09mb
function isPalindrome(s: string): boolean {
  let cleanedString: string = s.replace(/[^a-zA-Z0-9]/g, "");
  cleanedString = cleanedString.replace(/\s/g, "");
  cleanedString = cleanedString.toLowerCase();

  let reverseString: string = "";
  for (const letter of cleanedString) {
    reverseString = letter + reverseString;
  }

  return cleanedString === reverseString;
}

console.log(isPalindrome("A man, a plan, a canal: Panama"));
console.log(isPalindrome("race a car"));