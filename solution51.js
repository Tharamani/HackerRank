// You are given a number of sticks of varying lengths. You will iteratively cut the sticks into smaller sticks, discarding the shortest pieces until there are none left. At each iteration you will determine the length of the shortest stick remaining, cut that length from each of the longer sticks and then discard all the pieces of that shortest length. When all the remaining sticks are the same length, they cannot be shortened so discard them.

// Given the lengths of  sticks, print the number of sticks that are left before each iteration until there are none left.

// Example

// The shortest stick length is , so cut that length from the longer two and discard the pieces of length . Now the lengths are . Again, the shortest stick is of length , so cut that amount from the longer stick and discard those pieces. There is only one stick left, , so discard that stick. The number of sticks at each iteration are .

// Function Description

// Complete the cutTheSticks function in the editor below. It should return an array of integers representing the number of sticks before each cut operation is performed.

// cutTheSticks has the following parameter(s):

// int arr[n]: the lengths of each stick
// Returns

// int[]: the number of sticks after each iteration
// Input Format

// The first line contains a single integer , the size of .
// The next line contains  space-separated integers, each an , where each value represents the length of the  stick.

// Constraints

// Sample Input 0

// STDIN           Function
// -----           --------
// 6               arr[] size n = 6
// 5 4 4 2 2 8     arr = [5, 4, 4, 2, 2, 8]
// Sample Output 0

// 6
// 4
// 2
// 1
// Explanation 0

// sticks-length        length-of-cut   sticks-cut
// 5 4 4 2 2 8             2               6
// 3 2 2 _ _ 6             2               4
// 1 _ _ _ _ 4             1               2
// _ _ _ _ _ 3             3               1
// _ _ _ _ _ _           DONE            DONE
// Sample Input 1

// 8
// 1 2 3 4 3 3 2 1
// Sample Output 1

// 8
// 6
// 4
// 1
// Explanation 1

// sticks-length         length-of-cut   sticks-cut
// 1 2 3 4 3 3 2 1         1               8
// _ 1 2 3 2 2 1 _         1               6
// _ _ 1 2 1 1 _ _         1               4
// _ _ _ 1 _ _ _ _         1               1
// _ _ _ _ _ _ _ _       DONE            DONE
// const arr = [1, 2, 3]
// const arr = [5, 4, 4, 2, 2, 8]
const arr = [1, 2, 3, 4, 3, 3, 2, 1]
function cutTheSticks (arr) {
  // Write your code here
  let count = arr.length
  while (count > 0) {
    if (arr.length > 0) {
      console.log('arr.length', arr.length)
    }
    const min = Math.min.apply(null, arr)
    for (let i = 0; i < arr.length; i++) {
      const lengthStick = Math.abs(arr[i] - min)
      if (lengthStick === 0) {
        arr.splice(i, 1)
        i--
      } else {
        if (i !== -1) {
          arr[i] = lengthStick
        }
      }
    }
    count--
  }
}
cutTheSticks(arr)
