// You are the benevolent ruler of Rankhacker Castle, and today you're distributing bread. Your subjects are in a line, and some of them already have some loaves. Times are hard and your castle's food stocks are dwindling, so you must distribute as few loaves as possible according to the following rules:

// Every time you give a loaf of bread to some person , you must also give a loaf of bread to the person immediately in front of or behind them in the line (i.e., persons  or ).
// After all the bread is distributed, each person must have an even number of loaves.
// Given the number of loaves already held by each citizen, find and print the minimum number of loaves you must distribute to satisfy the two rules above. If this is not possible, print NO.

// Example

// We can first give a loaf to  and  so .
// Next we give a loaf to  and  and have  which satisfies our conditions.
// All of the counts are now even numbers. We had to distribute  loaves.

// Function Description

// Complete the fairRations function in the editor below.

// fairRations has the following parameter(s):

// int B[N]: the numbers of loaves each persons starts with
// Returns

// string: the minimum number of loaves required, cast as a string, or 'NO'
// Input Format

// The first line contains an integer , the number of subjects in the bread line.

// The second line contains  space-separated integers .

// Constraints

// , where
// Output Format

// Sample Input 0

// STDIN       Function
// -----       --------
// 5           B[] size N = 5
// 2 3 4 5 6   B = [2, 3, 4, 5, 6]
// Sample Output 0

// 4
// Explanation 0

// The initial distribution is . The requirements can be met as follows:

// Give  loaf of bread each to the second and third people so that the distribution becomes .
// Give  loaf of bread each to the third and fourth people so that the distribution becomes .
// Each of the  subjects has an even number of loaves after  loaves were distributed.

// Sample Input 1

// 2
// 1 2
// Sample Output 1

// NO
// Explanation 1

// The initial distribution is . As there are only  people in the line, any time you give one person a loaf you must always give the other person a loaf. Because the first person has an odd number of loaves and the second person has an even number of loaves, no amount of distributed loaves will ever result in both subjects having an even number of loaves.
// const B = [4, 5, 6, 7]
// const B = [2, 3, 4, 5, 6]
const B = [1, 2, 3]
function fairRations (B) {
  // Write your code here

  //   if (B.length > 2) {
  //     let count = 0
  //     for (let i = 0; i < B.length; i++) {
  //     //   console.log(B[i])
  //       if (B[i] % 2 === 0) {
  //         console.log('if B[i]', B[i])
  //       } else {
  //         B[i] += 1

  //         console.log('else B[i]', B[i])
  //         B[i + 1] += 1
  //         count += 2
  //         // console.log('else B[i+1]', B[i + 1])
  //       }
  //     }
  //     console.log(count)
  //     return count
  //   } else {
  //     console.log('NO')
  //     return 'NO'
  //   }

  // Alternative solution
  const count = new Array(B.length - 1).fill(0).reduce((target, item, index) => {
    !!(B[index] % 2) && (B[index + 1]++, (target += 2))

    return target
  }, 0)

  return !(B[B.length - 1] % 2) ? count : 'NO'
}
fairRations(B)
