/** @format */

let grades = [4, 73, 67, 38, 33];
let n = 5;
let result = grades.map((value, index) => {
	let actualVal = Math.round(value);
	let dif = Math.round(value) + (n - (Math.round(value) % n)) - Math.round(value);

	if (actualVal > 35) {
		if (dif < 3) return Math.round(value) + (n - (Math.round(value) % n));
		else return Math.round(value);
	} else {
		return Math.round(value);
	}
});
console.log(result);
// return result;
