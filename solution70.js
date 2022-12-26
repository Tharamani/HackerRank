// Given a sequence of integers , a triplet  is beautiful if:

// Given an increasing sequenc of integers and the value of , count the number of beautiful triplets in the sequence.

// Example

// There are three beautiful triplets, by index: . To test the first triplet,  and .

// Function Description

// Complete the beautifulTriplets function in the editor below.

// beautifulTriplets has the following parameters:

// int d: the value to match
// int arr[n]: the sequence, sorted ascending
// Returns

// int: the number of beautiful triplets
// Input Format

// The first line contains  space-separated integers,  and , the length of the sequence and the beautiful difference.
// The second line contains  space-separated integers .

// Constraints

// Sample Input

// STDIN           Function
// -----           --------
// 7 3             arr[] size n = 7, d = 3
// 1 2 4 5 7 8 10  arr = [1, 2, 4, 5, 7, 8, 10]
// Sample Output

// 3
// Explanation

// There are many possible triplets , but our only beautiful triplets are  ,  and  by value, not index. Please see the equations below:

// Recall that a beautiful triplet satisfies the following equivalence relation:  where .
const d = 1
const arr = [2, 2, 3, 4, 5]
function beautifulTriplets (d, arr) {
  // Write your code here
  let result = 0
  for (let i = 0; i < arr.length; i++) {
    const numb1 = arr[i] - d
    const numb2 = numb1 - d
    if (arr.includes(numb1) && arr.includes(numb2)) {
      console.log(numb1, numb2)
      console.log(arr.includes(numb1), arr.includes(numb2))
      result += 1
    }
  }
  console.log(result)
  return result
}
beautifulTriplets(d, arr)
