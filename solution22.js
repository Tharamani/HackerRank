/** @format */

function countingValleys(steps, path) {
	// Write your code here

	let strArr = path.split('');
	let count = 0;
	let result = 0;
	for (let step = 0; step < steps; step++) {
		if (count == 0 && strArr[step].toLowerCase() == 'd') {
			console.log(count, strArr[step], result);
			count -= 1;
			result += 1;
			console.log(count, strArr[step], result);
		} else if (strArr[step].toLowerCase() == 'd') {
			count -= 1;
			console.log('count-', strArr[step], count);
		} else {
			//u
			count += 1;
			console.log('count+', strArr[step], count);
		}
	}
	console.log(result);
	return result;
}
countingValleys(8, 'UDDDUDUU');
