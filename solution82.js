// There is a strange counter. At the first second, it displays the number . Each second, the number displayed by decrements by  until it reaches . In next second, the timer resets to  and continues counting down. The diagram below shows the counter values for each time  in the first three cycles:

// strange(1).png

// Find and print the value displayed by the counter at time .

// Function Description

// Complete the strangeCounter function in the editor below.

// strangeCounter has the following parameter(s):

// int t: an integer
// Returns

// int: the value displayed at time
// Input Format

// A single integer, the value of .

// Constraints

// Subtask

//  for  of the maximum score.
// Sample Input

// 4
// Sample Output

// 6
// Explanation

// Time  marks the beginning of the second cycle. It is double the number displayed at the beginning of the first cycle:. This is shown in the diagram in the problem statement.
// const t = 4
// const t = 10
const t = 17
function strangeCounter (t) {
  // Write your code here
  // time starts from 1
  let time = 1
  const timeSec = [1] // add time value to array
  let counter = 0 // loop counter
  while (time <= t) {
    // capture time on every loop
    time = time + 2 ** counter * 3 // time + value = time
    timeSec.push(time)
    // loop counter till given time is reaced
    counter++
  }
  //   console.log(time)
  //   console.log(timeSec)
  //   console.log(counter)
  //   console.log(timeSec.at(timeSec.length - 2))
  // time at last index - 1
  const time0 = timeSec.at(timeSec.length - 2)
  // reduce counter value by 1
  counter = counter - 1
  // 17-10=7
  const diff = t - time0
  //   console.log(diff)
  // value at the index - 1 counter time
  const value0 = 2 ** counter * 3
  //   console.log(value0)
  const result = value0 - diff
  //   console.log(result)
  return result
}
strangeCounter(t)
