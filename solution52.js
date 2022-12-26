// A pangram is a string that contains every letter of the alphabet. Given a sentence determine whether it is a pangram in the English alphabet. Ignore case. Return either pangram or not pangram as appropriate.

// Example

// The string contains all letters in the English alphabet, so return pangram.

// Function Description

// Complete the function pangrams in the editor below. It should return the string pangram if the input string is a pangram. Otherwise, it should return not pangram.

// pangrams has the following parameter(s):

// string s: a string to test
// Returns

// string: either pangram or not pangram
// Input Format

// A single line with string .

// Constraints

// Each character of ,

// Sample Input

// Sample Input 0

// We promptly judged antique ivory buckles for the next prize

// Sample Output 0

// pangram

// Sample Explanation 0

// All of the letters of the alphabet are present in the string.

// Sample Input 1

// We promptly judged antique ivory buckles for the prize

// Sample Output 1

// not pangram

// Sample Explanation 0

// const s = 'We promptly judged antique ivory buckles for the prize'
const s = 'We promptly judged antique ivory buckles for the next prize'
// The string lacks an x.
function pangrams (s) {
  // Write your code here
  const a = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']

  const sArr = s.toLowerCase().replaceAll(' ', '').split('')
  //   console.log(s.replaceAll(' ', '').split(''))s
  const sMap = {}
  let count = 0
  for (const aplhabet of a) {
    for (const c of sArr) {
      if (aplhabet === c) {
        // console.log(aplhabet, c)
        sMap[aplhabet] = c
        count++
        break
      }
    }
  }

  // console.log(sMap)
  // console.log(count)
  // console.log(count < a.length ? 'not pangram' : 'pangram')
  return count < a.length ? 'not pangram' : 'pangram'
}
pangrams(s)
