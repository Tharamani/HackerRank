const n = 2
const k = 3
const arr = [4, 2]
function workbook (n, k, arr) {
  // Write your code here
  let result = 0
  let page = 1

  for (const i of Array.from({ length: n }, (value, index) => index)) {
    const problems = arr[i]

    for (const j of Array.from(
      { length: problems },
      (value, index) => index + 1
    )) {
      j === page && result++

      j !== problems && !(j % k) && page++
    }

    page++
  }
  console.log(result)
  return result
}
workbook(n, k, arr)
