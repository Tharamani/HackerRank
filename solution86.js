// Given two arrays of integers, find which elements in the second array are missing from the first array.

// Example

// The  array is the orginal list. The numbers missing are .

// Notes

// If a number occurs multiple times in the lists, you must ensure that the frequency of that number in both lists is the same. If that is not the case, then it is also a missing number.
// Return the missing numbers sorted ascending.
// Only include a missing number once, even if it is missing multiple times.
// The difference between the maximum and minimum numbers in the original list is less than or equal to .
// Function Description

// Complete the missingNumbers function in the editor below. It should return a sorted array of missing numbers.

// missingNumbers has the following parameter(s):

// int arr[n]: the array with missing numbers
// int brr[m]: the original array of numbers
// Returns

// int[]: an array of integers
// Input Format

// There will be four lines of input:

//  - the size of the first list,
// The next line contains  space-separated integers
//  - the size of the second list,
// The next line contains  space-separated integers

// Constraints

// Sample Input

// 10
// 203 204 205 206 207 208 203 204 205 206
// 13
// 203 204 204 205 206 207 205 208 203 206 205 206 204
// Sample Output

// 204 205 206
// Explanation

//  is present in both arrays. Its frequency in  is , while its frequency in  is . Similarly,  and  occur twice in , but three times in . The rest of the numbers have the same frequencies in both lists.
const arr = [7, 2, 5, 3, 5, 3]
const brr = [7, 2, 5, 4, 6, 3, 5, 3]
function missingNumbers (arr, brr) {
  // Write your code here
//   console.log(arr.forEach((v) => { brr.splice(brr.indexOf(v), 1); console.log(brr) }), [...new Set(brr)].sort((a, b) => a - b))
  arr.forEach((v) => {
    brr.splice(brr.indexOf(v), 1)
  })

  console.log([...new Set(brr)].sort((a, b) => a - b))
  // return [...new Set(brr)].sort((a, b) => a - b)
}
missingNumbers(arr, brr)
