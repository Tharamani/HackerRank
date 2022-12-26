/** @format */

// Given a square matrix, calculate the absolute difference between the sums of its diagonals.

// For example, the square matrix  is shown below:
// 1 2 3
// 4 5 6
// 9 8 9
// he left-to-right diagonal = . The right to left diagonal = . Their absolute difference is .
// Function description

// Complete the  function in the editor below.

// diagonalDifference takes the following parameter:

// int arr[n][m]: an array of integers
// Return

// int: the absolute diagonal difference

// 1 2 3
// 4 5 6
// 9 8 9
// let arr = [
// 	[1, 2, 3],
// 	[4, 5, 6],
// 	[9, 8, 9],
// ];
let arr = [[3], [11, 2, 4], [4, 5, 6], [10, 8, -12]];
// let arr = [[9], [6, 6, 7, -10, 9, -3, 8, 9, -1], [9, 7, -10, 6, 4, 1, 6, 1, 1], [-1, -2, 4, -6, 1, -4, -6, 3, 9], [-8, 7, 6, -1, -6, -6, 6, -7, 2], [-10, -4, 9, 1, -7, 8, -5, 3, -5], [-8, -3, -4, 2, -3, 7, -5, 1, -5], [-2, -7, -4, 8, 3, -1, 8, 2, 3], [-3, 4, 6, -7, -7, -8, -3, 9, -6], [-2, 0, 5, 4, 4, 4, -3, 3, 0]];

let newArray = arr.filter((value, index) => {
	console.log(value.length >= arr.length - 1);
	if (value.length >= arr.length - 1) return value;
});
console.log('newArray: ', newArray);
let leftDiagnalSumArray = [];
let rightDiagnalSumArray = [];
for (let i = 0; i < newArray.length; i++) {
	var innerArrayLength = newArray[i].length;
	// console.log('innerArrayLength: ', innerArrayLength);
	// console.log('newArray.length: ', newArray.length);
	if (newArray.length === innerArrayLength) {
		for (let j = 0; j < innerArrayLength; j++) {
			if (i === j) {
				// console.log('i, j: ', newArray[i][j]);
				leftDiagnalSumArray.push(newArray[i][j]);
				break;
			}
		}
	}
}

for (let i = 0; i < newArray.length; i++) {
	var innerArrayLength = newArray[i].length;
	if (newArray.length === innerArrayLength) {
		for (let j = innerArrayLength - i - 1; j >= 0; j--) {
			rightDiagnalSumArray.push(newArray[i][j]);
			break;
		}
	}
}

let leftDiagnalSumArraySum = leftDiagnalSumArray.reduce((a, cv) => {
	return (a += cv);
}, 0);

let rightDiagnalSumArraySum = rightDiagnalSumArray.reduce((a, cv) => {
	return (a += cv);
}, 0);

let diff = rightDiagnalSumArraySum - leftDiagnalSumArraySum;
console.log(diff);
return diff;
