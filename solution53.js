// Little Bobby loves chocolate. He frequently goes to his favorite  store, Penny Auntie, to buy them. They are having a promotion at Penny Auntie. If Bobby saves enough wrappers, he can turn them in for a free chocolate.

// Example

// He has  to spend, bars cost , and he can turn in  wrappers to receive another bar. Initially, he buys  bars and has  wrappers after eating them. He turns in  of them, leaving him with , for  more bars. After eating those two, he has  wrappers, turns in  leaving him with  wrapper and his new bar. Once he eats that one, he has  wrappers and turns them in for another bar. After eating that one, he only has  wrapper, and his feast ends. Overall, he has eaten  bars.

// Function Description

// Complete the chocolateFeast function in the editor below.

// chocolateFeast has the following parameter(s):

// int n: Bobby's initial amount of money
// int c: the cost of a chocolate bar
// int m: the number of wrappers he can turn in for a free bar
// Returns

// int: the number of chocolates Bobby can eat after taking full advantage of the promotion
// Note: Little Bobby will always turn in his wrappers if he has enough to get a free chocolate.

// Input Format

// The first line contains an integer, , the number of test cases to analyze.
// Each of the next  lines contains three space-separated integers: , , and . They represent money to spend, cost of a chocolate, and the number of wrappers he can turn in for a free chocolate.

// Constraints

// Sample Input

// STDIN   Function
// -----   --------
// 3       t = 3 (test cases)
// 10 2 5  n = 10, c = 2, m = 5 (first test case)
// 12 4 4  n = 12, c = 4, m = 4 (second test case)
// 6 2 2   n = 6,  c = 2, m = 2 (third test case)
// Sample Output

// 6
// 3
// 5
// Explanation

// Bobby makes the following  trips to the store:

// He spends  on  chocolates at  apiece. He then eats them and exchanges all  wrappers to get  more. He eats  chocolates.
// He spends his  on  chocolates at  apiece. He has  wrappers, but needs  to trade for his next chocolate. He eats  chocolates.
// He spends  on  chocolates at  apiece. He then exchanges  of the  wrappers for  additional piece. Next, he uses his third leftover chocolate wrapper from his initial purchase with the wrapper from his trade-in to do a second trade-in for  more piece. At this point he has  wrapper left, which is not enough to perform another trade-in. He eats  chocolates.
// const n = 6; const c = 2; const m = 2
// const n = 10; const c = 2; const m = 5
// const n = 12; const c = 4; const m = 4
const n = 15; const c = 3; const m = 2
function chocolateFeast (n, c, m) {
  // Write your code here
//   const choaclates = 0
  let totalChocolate = n / c
  let wrappers = totalChocolate
  //   console.log('Total choaclates, wrappers', totalChocolate, wrappers)
  let chocolates = totalChocolate
  while (wrappers >= m) {
    wrappers = (wrappers - m)
    // console.log('wrappers', wrappers)
    totalChocolate = (totalChocolate - m)
    // console.log('totalChocolate', totalChocolate)
    if (wrappers === 0) {
      totalChocolate += 1
      chocolates += totalChocolate
    //   console.log('totalChoclate', totalChocolate)
    //   console.log('chocolates', chocolates)
    } else {
      if ((wrappers + totalChocolate) >= m) {
        totalChocolate += 1
        // console.log('totalChoclate', totalChocolate)
        chocolates += totalChocolate
      }
    }
  }
  console.log(chocolates)
  return chocolates
}
chocolateFeast(n, c, m)
