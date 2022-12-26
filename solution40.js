/** @format */

// Given an array of integers, determine the minimum number of elements to delete to leave only elements of equal value.

// Example

// Delete the  elements  and  leaving . If both twos plus either the  or the  are deleted, it takes  deletions to leave either  or . The minimum number of deletions is .

// Function Description

// Complete the equalizeArray function in the editor below.

// equalizeArray has the following parameter(s):

// int arr[n]: an array of integers
// Returns

// int: the minimum number of deletions required
// Input Format

// The first line contains an integer , the number of elements in .
// The next line contains  space-separated integers .

// Constraints

// Sample Input

// STDIN       Function
// -----       --------
// 5           arr[] size n = 5
// 3 3 2 1 3   arr = [3, 3, 2, 1, 3]
// Sample Output

// 2
// Explanation

// Delete  and  to leave . This is minimal. The only other options are to delete  elements to get an array of either  or .
// let arr = [1, 2, 2, 3];
// let arr = [3, 3, 2, 1, 3];
const arr = [1, 2, 3, 1, 2, 3, 3, 3]
function equalizeArray (arr) {
  // Write your code here
  const numMap = {}
  let maxCount = 1
  for (const num of arr) {
    numMap[num] ? numMap[num]++ : (numMap[num] = 1)
  }
  for (const num in numMap) {
    if (numMap[num] > maxCount) {
      maxCount = numMap[num]
    }
  }
  // console.log(numMap);
  // console.log(arr.length - maxCount);
  return arr.length - maxCount
}
equalizeArray(arr)
