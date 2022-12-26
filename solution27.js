/** @format */

// Return the minimum value, .

// Sample Input 1

// 5
// 4
// Sample Output 1

// 0
// Explanation 1

// If the student starts turning from page , they need to turn  pages:

// Untitled Diagram(4).png

// If they start turning from page , they do not need to turn any pages:

// Untitled Diagram(5).png

// Return the minimum value, .

let n = 6,
	p = 2;
// let n = 5,
// 	p = 4;
// let n = 7,
// 	p = 4;
// let n = 37455,
// 	p = 29835;
function pageCount(n, p) {
	// Write your code here
	var frontFlip = Math.floor(p / 2);
	var backFlip = Math.floor(n / 2 - frontFlip);

	var result = Math.min(frontFlip, backFlip);
	console.log(frontFlip, backFlip, result);
	return result;
}
pageCount(n, p);
