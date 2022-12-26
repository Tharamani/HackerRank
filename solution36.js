/** @format */

// The Utopian Tree goes through 2 cycles of growth every year. Each spring, it doubles in height. Each summer, its height increases by 1 meter.

// A Utopian Tree sapling with a height of 1 meter is planted at the onset of spring. How tall will the tree be after  growth cycles?

// For example, if the number of growth cycles is , the calculations are as follows:

// Period  Height
// 0          1
// 1          2
// 2          3
// 3          6
// 4          7
// 5          14
// Function Description

// Complete the utopianTree function in the editor below.

// utopianTree has the following parameter(s):

// int n: the number of growth cycles to simulate
// Returns

// int: the height of the tree after the given number of cycles
// Input Format

// The first line contains an integer, , the number of test cases.
//  subsequent lines each contain an integer, , the number of cycles for that test case.

// Constraints

// Sample Input

// 3
// 0
// 1
// 4
// Sample Output

// 1
// 2
// 7
// Explanation

// There are 3 test cases.

// In the first case (), the initial height () of the tree remains unchanged.

// In the second case (), the tree doubles in height and is  meters tall after the spring cycle.

// In the third case (), the tree doubles its height in spring (, ), then grows a meter in summer (, ), then doubles after the next spring (, ), and grows another meter after summer (, ). Thus, at the end of 4 cycles, its height is  meters.
// let n = 0;
// let n = 1;
// let n = 4;
let n = 5;
function utopianTree(n) {
	// Write your code here
	let height = 0;

	for (let i = 0; i <= n; i++) {
		if (i % 2 === 0) {
			height = height + 1;
		} else {
			height = height * 2;
		}
	}

	// console.log(height);
	return height;
}
utopianTree(n);
