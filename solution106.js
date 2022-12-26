// Given the time in numerals we may convert it into words, as shown below:

// At , use o' clock. For , use past, and for  use to. Note the space between the apostrophe and clock in o' clock. Write a program which prints the time in words for the input given in the format described.

// Function Description

// Complete the timeInWords function in the editor below.

// timeInWords has the following parameter(s):

// int h: the hour of the day
// int m: the minutes after the hour
// Returns

// string: a time string as described
// Input Format

// The first line contains , the hours portion The second line contains , the minutes portion

// Constraints

// Sample Input 0

// 5
// 47
// Sample Output 0

// thirteen minutes to six
// Sample Input 1

// 3
// 00
// Sample Output 1

// three o' clock
// Sample Input 2

// 7
// 15
// Sample Output 2

// quarter past seven
const h = 7
const m = 29
function timeInWords (h, m) {
  // Write your code here
  const nums = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'quarter', 'sixteen', 'seventeen', 'eighteen', 'nineteen', 'twenty', 'twenty one', 'twenty two', 'twenty three', 'twenty four', 'twenty five', 'twenty six', 'twenty seven', 'twenty eight', 'twenty nine', 'half']
  let inWords = ''
  if (m === 0) {
    inWords = (nums[h] + ' o\' clock')
  } else if (m === 1) {
    inWords = (nums[m] + ' minute past ' + nums[h])
  } else if (m === 15 || m === 30) {
    inWords = (nums[m] + ' past ' + nums[h])
  } else if (m === 45) {
    inWords = (nums[60 - m] + ' to ' + nums[h + 1])
  } else if (m < 30) {
    inWords = (nums[m] + ' minutes past ' + nums[h])
  } else {
    inWords = (nums[60 - m] + ' minutes to ' + nums[h + 1])
  }
  return inWords
}
timeInWords(h, m)
