// The distance between two array values is the number of indices between them. Given , find the minimum distance between any pair of equal elements in the array. If no such value exists, return .

// Example

// There are two matching pairs of values:  and . The indices of the 's are  and , so their distance is . The indices of the 's are  and , so their distance is . The minimum distance is .

// Function Description

// Complete the minimumDistances function in the editor below.

// minimumDistances has the following parameter(s):

// int a[n]: an array of integers
// Returns

// int: the minimum distance found or  if there are no matching elements
// Input Format

// The first line contains an integer , the size of array .
// The second line contains  space-separated integers .

// Constraints

// Output Format

// Print a single integer denoting the minimum  in . If no such value exists, print .

// Sample Input

// STDIN           Function
// -----           --------
// 6               arr[] size n = 6
// 7 1 3 4 1 7     arr = [7, 1, 3, 4, 1, 7]
// Sample Output

// 3
// Explanation
// There are two pairs to consider:

//  and  are both , so .
//  and  are both , so .
// The answer is .
// const a = [3, 2, 1, 2, 3]
const a = [1, 2, 3, 4, 10]
function minimumDistances (a) {
  // Write your code here
  const result = []
  for (let i = 0; i < a.length; i++) {
    for (let j = i + 1; j < a.length; j++) {
      if (a[i] === a[j]) {
        // console.log(a[i], a[j])
        // console.log(i, j)
        result.push(Math.abs(j - i))
        break
      }
    }
  }
  //   console.log(result)
  if (result.length > 0) {
    // console.log(Math.min.apply(null, result))
    return Math.min.apply(null, result)
  } else {
    // console.log(-1)
    return -1
  }
}
minimumDistances(a)
