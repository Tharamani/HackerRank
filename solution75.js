const s = 'aaabbbb'
function gameOfThrones (s) {
  // Write your code here
  const freq = {}

  for (const char of s) {
    freq[char] = (freq[char] || 0) + 1
  }
  console.log(freq)
  let firstOdd = s.length % 2 !== 0
  for (const num of Object.keys(freq)) {
    console.log(num)
    if (freq[num] % 2 !== 0) {
      if (firstOdd) firstOdd = false
      else return 'NO'
    }
  }
  return 'YES'
}
gameOfThrones(s)
