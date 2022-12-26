
const s1 = '10101'; const s2 = '00101'
function stringXor (s1, s2) {
  // Write your code here
  let res = ''
  for (let i = 0; i < s1.length; i++) {
    if (s1[i] === s2[i]) {
      res += '0'
    } else {
      res += '1'
    }
  }
  console.log(res)
  return res
}
stringXor(s1, s2)
