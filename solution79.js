// Given a square grid of characters in the range ascii[a-z], rearrange elements of each row alphabetically, ascending. Determine if the columns are also in ascending alphabetical order, top to bottom. Return YES if they are or NO if they are not.

// Example

// The grid is illustrated below.

// a b c
// a d e
// e f g
// The rows are already in alphabetical order. The columns a a e, b d f and c e g are also in alphabetical order, so the answer would be YES. Only elements within the same row can be rearranged. They cannot be moved to a different row.

// Function Description

// Complete the gridChallenge function in the editor below.

// gridChallenge has the following parameter(s):

// string grid[n]: an array of strings
// Returns

// string: either YES or NO
// Input Format

// The first line contains , the number of testcases.

// Each of the next  sets of lines are described as follows:
// - The first line contains , the number of rows and columns in the grid.
// - The next  lines contains a string of length

// Constraints

// Each string consists of lowercase letters in the range ascii[a-z]

// Output Format

// For each test case, on a separate line print YES if it is possible to rearrange the grid alphabetically ascending in both its rows and columns, or NO otherwise.

// Sample Input

// STDIN   Function
// -----   --------
// 1       t = 1
// 5       n = 5
// ebacd   grid = ['ebacd', 'fghij', 'olmkn', 'trpqs', 'xywuv']
// fghij
// olmkn
// trpqs
// xywuv
// Sample Output

// YES
// Explanation

// The x grid in the  test case can be reordered to

// abcde
// fghij
// klmno
// pqrst
// uvwxy
// This fulfills the condition since the rows 1, 2, ..., 5 and the columns 1, 2, ..., 5 are all alphabetically sorted.
// const grid = ['abc', 'ade', 'efg']
// const grid = ['ebacd', 'fghij', 'olmkn', 'trpqs', 'xywuv']
// const grid = ['mpxz', 'abcd', 'wlmf']
const grid = ['abc', 'hjk', 'mpq', 'rtv']
function gridChallenge (grid) {
  // Write your code here

  const sortedGrid = []
  const gridLength = grid.length

  // Create a sorted grid
  for (let i = 0; i < gridLength; i += 1) {
    const chars = grid[i].split('').sort()
    sortedGrid.push(chars.join(''))
  }

  // Join the grid into a long text in order to do a single
  // passthrough and check if the columns are also sorted.
  const sortedText = sortedGrid.join('')

  // In each iteration checks the current char with the equivalent
  // char of the next column. Iterates only to the second-to-last
  // column because the last column is checked by looking ahead.
  for (let i = 0; i < sortedText.length - gridLength; i += 1) {
    if (sortedText[i] <= sortedText[i + gridLength]) {
      continue
    } else {
      return 'NO'
    }
  }

  return 'YES'
}
gridChallenge(grid)
