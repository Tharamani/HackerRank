// The median of a list of numbers is essentially its middle element after sorting. The same number of elements occur after it as before. Given a list of numbers with an odd number of elements, find the median?

// Example

// The sorted array . The middle element and the median is .

// Function Description

// Complete the findMedian function in the editor below.

// findMedian has the following parameter(s):

// int arr[n]: an unsorted array of integers
// Returns

// int: the median of the array
// Input Format

// The first line contains the integer , the size of .
// The second line contains  space-separated integers

// Constraints

//  is odd
// Sample Input 0

// 7
// 0 1 2 4 6 5 3
// Sample Output 0

// 3
// Explanation 0

// The sorted . It's middle element is at .

// const arr = [5, 3, 1, 2, 4]
const arr = [0, 1, 2, 4, 6, 5, 3]
function findMedian (arr) {
  // Write your code here

  arr.sort(function (a, b) { return a - b })

  const half = Math.floor(arr.length / 2)

  if (arr.length % 2) { return arr[half] } else { return (arr[half - 1] + arr[half]) / 2.0 }
}
findMedian(arr)
