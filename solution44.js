// Given a sequence of  integers,  where each element is distinct and satisfies . For each  where , that is  increments from  to , find any integer  such that  and keep a history of the values of  in a return array.

// Example

// Each value of  between  and , the length of the sequence, is analyzed as follows:

// , so
// , so
// , so
// , so
// , so
// The values for  are .

// Function Description

// Complete the permutationEquation function in the editor below.

// permutationEquation has the following parameter(s):

// int p[n]: an array of integers
// Returns

// int[n]: the values of  for all  in the arithmetic sequence  to
// Input Format

// The first line contains an integer , the number of elements in the sequence.
// The second line contains  space-separated integers  where .

// Constraints

// , where .
// Each element in the sequence is distinct.
// Sample Input 0

// 3
// 2 3 1
// Sample Output 0

// 2
// 3
// 1
// Explanation 0

// Given the values of , , and , we calculate and print the following values for each  from  to :

// , so we print the value of  on a new line.
// , so we print the value of  on a new line.
// , so we print the value of  on a new line.
// Sample Input 1

// 5
// 4 3 5 1 2
// Sample Output 1

// 1
// 3
// 5
// 4
// 2
// const p = [2, 3, 1]
const p = [5, 2, 1, 3, 4]
function permutationEquation (p) {
  // Write your code here
  const x = Array.from({ length: p.length }, (v, k) => k + 1)
  // console.log(x)

  const pOfX = []
  for (let i = 0; i < x.length; i++) {
    // console.log(i, x[i])
    for (let j = 0; j < p.length; j++) {
      // console.log(j, p[j])
      if (x[i] === p[j]) {
        // console.log(j + 1)
        const vP = j + 1

        for (let k = 0; k < p.length; k++) {
          if (vP === p[k]) {
            // console.log(j + 1)
            // console.log(k + 1, p[k])
            pOfX.push(k + 1)
          }
        }
      }
    }
  }
  console.log(pOfX)
  return pOfX
}
permutationEquation(p)
