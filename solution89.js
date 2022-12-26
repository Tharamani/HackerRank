// There are two -element arrays of integers,  and . Permute them into some  and  such that the relation  holds for all  where .

// There will be  queries consisting of , , and . For each query, return YES if some permutation ,  satisfying the relation exists. Otherwise, return NO.

// Example

// A valid  is  and :  and . Return YES.

// Function Description

// Complete the twoArrays function in the editor below. It should return a string, either YES or NO.

// twoArrays has the following parameter(s):

// int k: an integer
// int A[n]: an array of integers
// int B[n]: an array of integers
// Returns
// - string: either YES or NO

// Input Format

// The first line contains an integer , the number of queries.

// The next  sets of  lines are as follows:

// The first line contains two space-separated integers  and , the size of both arrays  and , and the relation variable.
// The second line contains  space-separated integers .
// The third line contains  space-separated integers .
// Constraints

// Sample Input

// STDIN       Function
// -----       --------
// 2           q = 2
// 3 10        A[] and B[] size n = 3, k = 10
// 2 1 3       A = [2, 1, 3]
// 7 8 9       B = [7, 8, 9]
// 4 5         A[] and B[] size n = 4, k = 5
// 1 2 2 1     A = [1, 2, 2, 1]
// 3 3 3 4     B = [3, 3, 3, 4]
// Sample Output

// YES
// NO
// Explanation

// There are two queries:

// Permute these into  and  so that the following statements are true:

// , , and . To permute  and  into a valid  and , there must be at least three numbers in  that are greater than .
const A = [0, 1]
const B = [0, 2]
const k = 1
function twoArrays (k, A, B) {
  // Write your code here
  const aSorted = [...A].sort((a, b) => a - b)
  const bSorted = [...B].sort((a, b) => a - b)

  let count = 0
  for (let i = 0; i < aSorted.length; i++) {
    for (let j = 0; j < bSorted.length; j++) {
      if (aSorted[i] + bSorted[j] >= k) {
        count++
        aSorted.splice(i, 1)
        bSorted.splice(j, 1)
        i--; j--
        break
      }
    }
  }
  return count === A.length ? 'YES' : 'NO'
}
twoArrays(k, A, B)
