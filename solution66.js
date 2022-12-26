
function isSmartNumber (num) {
  const val = Math.sqrt(num)
  if (num % (val * val) === 0 && num !== 2 && num !== 3) { return true }
  return false
}
console.log(isSmartNumber(1))
console.log(isSmartNumber(2))
console.log(isSmartNumber(7))
console.log(isSmartNumber(169))
