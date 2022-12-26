/** @format */

let n = 5;
// let n = 3;
function viralAdvertising(n) {
	let array = new Array(n).fill(0);
	let people = 5;
	let total = 0;
	for (let i = 0; i < array.length; i++) {
		total += Math.floor(people / 2);
		people = Math.floor(people / 2) * 3;
		// console.log(total, people);
	}
	console.log(total);
	return total;
}
viralAdvertising(n);
