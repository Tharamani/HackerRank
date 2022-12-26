/** @format */

// You are in charge of the cake for a child's birthday. You have decided the cake will have one candle for each year of their total age. They will only be able to blow out the tallest of the candles. Count how many candles are tallest.

// Example

// The maximum height candles are  units high. There are  of them, so return .

// Function Description

// Complete the function birthdayCakeCandles in the editor below.

// birthdayCakeCandles has the following parameter(s):

// int candles[n]: the candle heights
// Returns

// int: the number of candles that are tallest
// Input Format

// The first line contains a single integer, , the size of .
// The second line contains  space-separated integers, where each integer  describes the height of .

// Constraints

// Sample Input 0

// 4
// 3 2 1 3
// Sample Output 0

// 2
// Explanation 0

// Candle heights are . The tallest candles are  units, and there are  of them.

// let candles = [10];
// let candles = [18, 90, 90, 13, 90, 75, 90, 8, 90, 43];
// let candles = [4];
let candles = [3, 2, 1, 3];
// let candles = [
// 	9547948, 8558390, 9999933, 5148263, 5764559, 906438, 9296778, 1156268, 6642930, 362317, 5884372, 8183642, 1893625, 2078221, 9091567, 9008204, 5596899, 2415143, 3745745, 9999933, 4601052, 2226334, 9999933, 9084710, 6425739, 859550, 7297169, 2560362, 7342790, 6125814, 973515, 7983457, 1411690, 9999933, 7698786, 173508, 9999933, 7146414, 5063134, 6934007, 506731, 9672243, 1791721, 3542431, 9645190, 4101220, 120716, 4815228, 7129154, 1377763, 2420858, 9999933, 2913976, 4704061, 8792535, 8232675, 6865047, 4119291, 7633812, 6646342, 1714025, 653612, 1541039, 2074983, 7203496, 908154, 2567724,
// 	6466771, 9999933, 8767549, 923596, 7545333, 8336840, 7677082, 9224613, 15813, 1946806, 7379477, 9617658, 1431652, 1646399, 4316536, 9054082, 9999933, 7442742, 6195231, 5658010, 5196448, 9299025, 328790, 4842946, 7735895, 6408468, 3643022, 125830, 1311355, 6873837, 3429811, 8806735, 7931003, 857916, 4340781, 8759926, 775115, 2913265, 5116295, 2634520, 7840844, 9999933, 5278505, 6228386, 2951110, 5581449, 3722306, 220082, 1641686, 8022680, 7872730, 3630783, 9396252, 6623901, 8139011, 2244905, 6596692, 7298994, 2023640, 8866528, 7080770, 2287635, 74,
// ];

// let sortedArray = candles.sort((a, b) => {
// 	return b - a;
// });
// console.log('sortedArray: ', sortedArray);

// let resArr = sortedArray.filter((e, index, a) => {
// 	if (e === a[index + 1]) return e;
// });
// console.log('resArr: ', resArr);
// return resArr.length + 1;
// *******************************************************
// let duplicates = sortedArray.filter((currentValue, currentIndex) => sortedArray.indexOf(currentValue) !== currentIndex);
// console.log(duplicates.length + 1);
//************************************************ */

function birthdayCakeCandles(candles) {
	// Write your code here
	let max = 0;

	//find max number
	candles.forEach(candle => (candle > max ? (max = candle) : max));

	//filter the same number as max
	const result = candles.filter(candle => candle === max);

	console.log(result.length);
}

birthdayCakeCandles(candles);

// console.log(birthdayCakeCandles(candles));
