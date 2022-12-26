function closestNumbers (arr) {
  arr = arr.sort((a, b) => a - b)
  const results = new Map()
  const output = []

  for (let i = 0; i < arr.length - 1; i++) {
    results.set(`${arr[i]}:${arr[i + 1]}`, arr[i + 1] - arr[i])
  }

  const min = Math.min(...results.values())
  results.forEach((value, key) => {
    if (value === min) {
      output.push(...key.split(':'))
    }
  })

  return output
}
const arr = [5, 2, 3, 4, 1]
closestNumbers(arr)
