// Julius Caesar protected his confidential information by encrypting it using a cipher. Caesar's cipher shifts each letter by a number of letters. If the shift takes you past the end of the alphabet, just rotate back to the front of the alphabet. In the case of a rotation by 3, w, x, y and z would map to z, a, b and c.

// Original alphabet:      abcdefghijklmnopqrstuvwxyz
// Alphabet rotated +3:    defghijklmnopqrstuvwxyzabc
// Example

// The alphabet is rotated by , matching the mapping above. The encrypted string is .

// Note: The cipher only encrypts letters; symbols, such as -, remain unencrypted.

// Function Description

// Complete the caesarCipher function in the editor below.

// caesarCipher has the following parameter(s):

// string s: cleartext
// int k: the alphabet rotation factor
// Returns

// string: the encrypted string
// Input Format

// The first line contains the integer, , the length of the unencrypted string.
// The second line contains the unencrypted string, .
// The third line contains , the number of letters to rotate the alphabet by.

// Constraints

//  is a valid ASCII string without any spaces.

// Sample Input

// 11
// middle-Outz
// 2
// Sample Output

// okffng-Qwvb
// Explanation

// Original alphabet:      abcdefghijklmnopqrstuvwxyz
// Alphabet rotated +2:    cdefghijklmnopqrstuvwxyzab

// m -> o
// i -> k
// d -> f
// d -> f
// l -> n
// e -> g
// -    -
// O -> Q
// u -> w
// t -> v
// z -> b
// const s = 'middle-Outz'
// const k = 2
const s = 'Always-Look-on-the-Bright-Side-of-Life'
const k = 5
function caesarCipher (s, k) {
  let newString = ''
  for (let i = 0; i < s.length; i++) {
    if (!s[i].match(/[a-zA-Z]/)) {
      newString += s[i]
    } else if (s[i].match(/[a-z]/)) {
      let newS = ''
      const check = s[i].charCodeAt() + k % 26
      if (check > 122) {
        newS = String.fromCharCode(check - 122 + 96)
      } else {
        newS = String.fromCharCode(check)
      }
      newString += newS
    } else if (s[i].match(/[A-Z]/)) {
      let newS = ''
      const check = s[i].charCodeAt() + k % 26
      if (check > 90) {
        newS = String.fromCharCode(check - 90 + 64)
      } else {
        newS = String.fromCharCode(check)
      }
      newString += newS
    }
  }
  //   console.log(newString)
  return newString
}
caesarCipher(s, k)
// function caesarCipherRef (s, k) {
//   // Write your code here
//   const originalAlpha = 'abcdefghijklmnopqrstuvwxyz'
//   const copiedAlpha = originalAlpha
//   const copiedSliceAlpha = originalAlpha
//   const subSliced = copiedSliceAlpha.slice(0, k)
//   const sub = copiedAlpha.substring(k)
//   const cipherCode = sub + subSliced
//   //   console.log(cipherCode, originalAlpha)
//   const cipherCodeObj = {}
//   const result = []
//   // map alpha to ciper code
//   for (let i = 0; i < originalAlpha.length; i++) {
//     cipherCodeObj[originalAlpha[i]] = cipherCode[i]
//   }
//   console.log(cipherCodeObj)
//   let i = 0
//   for (const c in s) {
//     if (cipherCodeObj[s[c]]) {
//     //   console.log(cipherCodeObj[s[c]])
//       result.push(cipherCodeObj[s[c]])
//     } else {
//     //   cipherCodeObj[s[c]] = s[c]
//       //   console.log(cipherCodeObj[s[c]])
//       if (s[c].match(/[A-Z]/)) {
//         const alphaLowerC = s[c].toLowerCase()
//         // console.log('uperrcase', alphaLowerC)
//         result.push(cipherCodeObj[alphaLowerC].toUpperCase())
//         // console.log(cipherCodeObj[alphaLowerC].toUpperCase())
//       } else {
//         cipherCodeObj[s[c]] = s[c]
//         result.push(cipherCodeObj[s[c]])
//         // console.log(cipherCodeObj[s[c]])
//       }
//     }
//     i++
//   }
//   console.log(result.join(''))
//   // return (result.join(''))
// }

// caesarCipherRef(s, k)
