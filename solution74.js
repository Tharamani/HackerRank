
const grid = ['989', '191', '111']
function cavityMap (grid) {
  // Write your code here

  for (let i = 1; i < grid.length - 1; i++) {
    for (let j = 1; j < grid[i].length - 1; j++) {
      const cell = Number(grid[i][j])

      if (Math.max(
        grid[i + 1][j],
        grid[i - 1][j],
        grid[i][j + 1],
        grid[i][j - 1]
      ) < cell) {
        const rowAsArray = grid[i].split('')
        rowAsArray[j] = 'X'
        grid[i] = rowAsArray.join('')
      }
    }
  }
  console.log(grid)
  return grid
}
cavityMap(grid)
