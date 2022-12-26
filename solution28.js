/** @format */

// You are given a string containing characters  and  only. Your task is to change it into a string such that there are no matching adjacent characters. To do this, you are allowed to delete zero or more characters in the string.

// Your task is to find the minimum number of required deletions.

// Example

// Remove an  at positions  and  to make  in  deletions.

// Function Description

// Complete the alternatingCharacters function in the editor below.

// alternatingCharacters has the following parameter(s):

// string s: a string
// Returns

// int: the minimum number of deletions required
// Input Format

// The first line contains an integer , the number of queries.
// The next  lines each contain a string  to analyze.

// Constraints

// Each string  will consist only of characters  and .
// Sample Input

// 5
// AAAA
// BBBBB
// ABABABAB
// BABABA
// AAABBB
// Sample Output

// 3
// 4
// 0
// 0
// 4
// Explanation

// The characters marked red are the ones that can be deleted so that the string does not have matching adjacent characters.
let s = 'AABAABAAABBB';
// let s = 'ABABABAB';
// let s = 'BABABA';
// let s = 'AAAA';
// let s = 'BBBBB';
// let s = 'AAABBB';
function alternatingCharacters(s) {
	// Write your code here
	s = s.split('');
	const N = s.length;
	let res = 0;
	for (let i = 0; i < N - 1; i++) {
		if (s[i] === s[i + 1]) {
			console.log(s[i], s[i + 1]);
			res++;
		}
	}
	console.log(res);
	return res;
}
alternatingCharacters(s);
