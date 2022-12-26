/** @format */

// You wish to buy video games from the famous online video game store Mist.

// Usually, all games are sold at the same price,  dollars. However, they are planning to have the seasonal Halloween Sale next month in which you can buy games at a cheaper price. Specifically, the first game will cost  dollars, and every subsequent game will cost  dollars less than the previous one. This continues until the cost becomes less than or equal to  dollars, after which every game will cost  dollars. How many games can you buy during the Halloween Sale?

// Example

// .

// The following are the costs of the first , in order:

// Start at  units cost, reduce that by  units each iteration until reaching a minimum possible price, . Starting with  units of currency in your Mist wallet, you can buy 5 games: .

// Function Description

// Complete the howManyGames function in the editor below.

// howManyGames has the following parameters:

// int p: the price of the first game
// int d: the discount from the previous game price
// int m: the minimum cost of a game
// int s: the starting budget
// Input Format

// The first and only line of input contains four space-separated integers , ,  and .

// Constraints

// Sample Input 0

// 20 3 6 80
// Sample Output 0

// 6
// Explanation 0

// Assumptions other than starting funds, , match the example in the problem statement. With a budget of , you can buy  games at a cost of . A  game for an additional  units exceeds the budget.

// Sample Input 1

// 20 3 6 85
// Sample Output 1

// 7
// Explanation 1

// This is the same as the previous case, except this time the starting budget  units of currency. This time, you can buy  games since they cost . An additional game at  units will exceed the budget.
// let p = 20,
// d = 3,
// m = 6,
//     s = 70;

const p = 20
const d = 3
const m = 6
const s = 75
function howManyGames (p, d, m, s) {
  // Return the number of games you can buy
  let count = 0

  while (s >= p) {
    count++
    s = s - p
    p = Math.max(p - d, m)
  }
  console.log(count)
  return count
}
howManyGames(p, d, m, s)
