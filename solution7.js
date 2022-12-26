/** @format */

// Staircase detail

// This is a staircase of size :

//    #
//   ##
//  ###
// ####
// Its base and height are both equal to . It is drawn using # symbols and spaces. The last line is not preceded by any spaces.

// Write a program that prints a staircase of size .

// Function Description

// Complete the staircase function in the editor below.

// staircase has the following parameter(s):

// int n: an integer
// Print

// Print a staircase as described above.

// Input Format

// A single integer, , denoting the size of the staircase.

// Constraints

//  .

// Output Format

// Print a staircase of size  using # symbols and spaces.

// Note: The last line must have  spaces in it.
let n = 4;
let output = '';
for (let i = 1; i <= n; i++) {
	for (let s = n - 1; s >= i; s--) {
		output += ' ';
	}
	for (let h = 1; h <= i; h++) {
		output += '#';
	}
	output += '\n';
}
console.log(output);

for (let i = 1; i <= n; i++) {
	// print out a " " n-i times and append a # i times
	// console log adds a new line by default

	console.log(' '.repeat(n - i) + '#'.repeat(i));
}
