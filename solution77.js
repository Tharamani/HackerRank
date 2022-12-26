
// const s = 'abc'
// const s = 'abcba'
const s = 'ad'
function theLoveLetterMystery (s) {
  // Write your code here

  let i = 0
  let j = s.length - 1
  const steps = 0
  while (i < j) {
    let aCharCode = s.charCodeAt(i)
    let bCharCode = s.charCodeAt(j)
    console.log(aCharCode, bCharCode)
    let count = 0

    while (bCharCode > aCharCode) {
      bCharCode--
      count++
    }
    while (aCharCode > bCharCode) {
      console.log(aCharCode, bCharCode)
      count++
      aCharCode--
    }

    console.log('count', count)

    // if (s.charCodeAt(i) - s.charCodeAt(j) > 0) {
    //   steps += s.charCodeAt(i) - s.charCodeAt(j)
    // } else {
    //   steps += s.charCodeAt(j) - s.charCodeAt(i)
    // }
    i++
    j--
  }
  console.log(steps)
  return steps
}
theLoveLetterMystery(s)
