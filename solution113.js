// <!-- Sherlock considers a string to be valid if all characters of the string appear the same number of times. It is also valid if he can remove just  character at  index in the string, and the remaining characters will occur the same number of times. Given a string , determine if it is valid. If so, return YES, otherwise return NO.

// Example

// This is a valid string because frequencies are .

// This is a valid string because we can remove one  and have  of each character in the remaining string.

// This string is not valid as we can only remove  occurrence of . That leaves character frequencies of .

// Function Description

// Complete the isValid function in the editor below.

// isValid has the following parameter(s):

// string s: a string
// Returns

// string: either YES or NO
// Input Format

// A single string .

// Constraints

// Each character
// Sample Input 0

// aabbcd
// Sample Output 0

// NO
// Explanation 0

// Given , we would need to remove two characters, both c and d  aabb or a and b  abcd, to make it valid. We are limited to removing only one character, so  is invalid.

// Sample Input 1

// aabbccddeefghi
// Sample Output 1

// NO
// Explanation 1

// Frequency counts for the letters are as follows:

// {'a': 2, 'b': 2, 'c': 2, 'd': 2, 'e': 2, 'f': 1, 'g': 1, 'h': 1, 'i': 1}

// There are two ways to make the valid string:

// Remove  characters with a frequency of : .
// Remove  characters of frequency : .
// Neither of these is an option.

// Sample Input 2

// abcdefghhgfedecba
// Sample Output 2

// YES
// Explanation 2

// All characters occur twice except for  which occurs  times. We can delete one instance of  to have a valid string. -->
// const s = 'abc'
const s = 'aabbccddeefghi'
function isValid (s) {
  // Write your code here
  const countWord = new Map()
  const countFreq = new Map()
  const charArray = s.split('').sort()
  // console.log(charArray)
  for (const c of charArray) {
    countWord.set(c, countWord.get(c) ? countWord.get(c) + 1 : 1)
  }
  // console.log('countWord', countWord)
  countWord.forEach(element => {
    countFreq.set(element, countFreq.get(element) ? countFreq.get(element) + 1 : 1)
  })
  // console.log('countFreq', countFreq)
  const check = [0, 0, 0]
  countFreq.forEach(function (value) {
    check[1] = (value > check[1]) ? value : ''
    check[2] = value
    check[0]++
  })
  if (check[0] === 1) { return 'YES' } else { return (check[0] > 2 || check[2] > 1) ? 'NO' : 'YES' };
}
isValid(s)
