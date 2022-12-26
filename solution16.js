/** @format */

// Given an array of integers and a positive integer , determine the number of  pairs where  and  +  is divisible by .

// Example

// Three pairs meet the criteria:  and .

// Function Description

// Complete the divisibleSumPairs function in the editor below.

// divisibleSumPairs has the following parameter(s):

// int n: the length of array
// int ar[n]: an array of integers
// int k: the integer divisor
// Returns
// - int: the number of pairs

// Input Format

// The first line contains  space-separated integers,  and .
// The second line contains  space-separated integers, each a value of .

// Constraints

// Sample Input

// STDIN           Function
// -----           --------
// 6 3             n = 6, k = 3
// 1 3 2 6 1 2     ar = [1, 3, 2, 6, 1, 2]
// Sample Output

//  5
// Explanation

// Here are the  valid pairs when :

// let ar = [1, 2, 3, 4, 5, 6],
// 	k = 5,
// 	n = 6;

let ar = [1, 3, 2, 6, 1, 2],
	n = 6,
	k = 3;
function divisibleSumPairs(n, k, ar) {
	// Write your code here
	let count = 0;
	for (let i = 0; i < n; i++) {
		for (j = i + 1; j < n; j++) {
			if ((ar[i] + ar[j]) % k === 0) {
				count++;
				ar[i] + ' ' + ar[j];
			} else {
			}
		}
	}
	return count;
	// console.log(count);
}
divisibleSumPairs(n, k, ar);
