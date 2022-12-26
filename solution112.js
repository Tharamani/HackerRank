// mplement a modified Fibonacci sequence using the following definition:

// Given terms  and  where , term  is computed as:

// Given three integers, , , and , compute and print the  term of a modified Fibonacci sequence.

// Example

// Return .

// Function Description

// Complete the fibonacciModified function in the editor below. It must return the  number in the sequence.

// fibonacciModified has the following parameter(s):

// int t1: an integer
// int t2: an integer
// int n: the iteration to report
// Returns

// int: the  number in the sequence
// Note: The value of  may far exceed the range of a -bit integer. Many submission languages have libraries that can handle such large results but, for those that don't (e.g., C++), you will need to compensate for the size of the result.

// Input Format

// A single line of three space-separated integers, the values of , , and .

// Constraints

//  may far exceed the range of a -bit integer.
// Sample Input

// 0 1 5
// Sample Output

// 5
// Explanation

// The first two terms of the sequence are  and , which gives us a modified Fibonacci sequence of . The  term is

const t1 = 0
const t2 = 1
const n = 6
function fibonacciModified (t1, t2, n) {
  // Write your code here
  const a = []
  a.push(t1)
  a.push(t2)
  const BigNumber = require('bignumber.js')
  BigNumber.config({ EXPONENTIAL_AT: 1e+9, POW_PRECISION: 0 })
  let i = 0
  for (i = 2; i < n; i++) {
    const x = new BigNumber(a[i - 2])
    const y = new BigNumber(a[i - 1])
    a[i] = new BigNumber(x.plus(y.pow(2)))
  }
  return a[i - 1].toString()
}
fibonacciModified(t1, t2, n)
