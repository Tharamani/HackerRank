/** @format */

// You are choreographing a circus show with various animals. For one act, you are given two kangaroos on a number line ready to jump in the positive direction (i.e, toward positive infinity).

// The first kangaroo starts at location  and moves at a rate of  meters per jump.
// The second kangaroo starts at location  and moves at a rate of  meters per jump.
// You have to figure out a way to get both kangaroos at the same location at the same time as part of the show. If it is possible, return YES, otherwise return NO.

// Example

// After one jump, they are both at , (, ), so the answer is YES.

// Function Description

// Complete the function kangaroo in the editor below.

// kangaroo has the following parameter(s):

// int x1, int v1: starting position and jump distance for kangaroo 1
// int x2, int v2: starting position and jump distance for kangaroo 2
// Returns

// string: either YES or NO
// Input Format

// A single line of four space-separated integers denoting the respective values of , , , and .

// Constraints

// Sample Input 0

// 0 3 4 2
// Sample Output 0

// YES
// Explanation 0

// The two kangaroos jump through the following sequence of locations:

// image

// From the image, it is clear that the kangaroos meet at the same location (number  on the number line) after same number of jumps ( jumps), and we print YES.

// Sample Input 1

// 0 2 5 3
// Sample Output 1

// NO
// Explanation 1

// The second kangaroo has a starting location that is ahead (further to the right) of the first kangaroo's starting location (i.e., ). Because the second kangaroo moves at a faster rate (meaning ) and is already ahead of the first kangaroo, the first kangaroo will never be able to catch up. Thus, we print NO.
function kangaroo(x1, v1, x2, v2) {
	let result = '';

	if (x1 > x2 && v1 > v2) return (result = 'NO');
	else if (x1 < x2 && v1 < v2) return (result = 'NO');
	if (v1 == v2) return (result = 'NO');
	if ((x2 - x1) % (v1 - v2) == 0 || (x2 - x1) % (v2 - v1) == 0) return (result = 'YES');
	else return (result = 'NO');
}
console.log(kangaroo(0, 3, 4, 2));
// console.log(kangaroo(21, 6, 47, 3));
// console.log(kangaroo(6644, 5868, 8349, 3477));
// console.log(kangaroo(43, 2, 70, 2));
// console.log(kangaroo(45, 7, 56, 2)); // done
// console.log(kangaroo(28, 8, 96, 2)); // done
// kangaroo(2, 1, 1, 2); // done
// kangaroo(0, 2, 5, 3); // done
// kangaroo(2, 4, 6, 2);
// kangaroo(2, 4, 6, 2);
// console.log(kangaroo(21, 6, 47, 3));
