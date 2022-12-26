// // In a previous challenge you implemented the Insertion Sort algorithm. It is a simple sorting algorithm that works well with small or mostly sorted data. However, it takes a long time to sort large unsorted data. To see why, we will analyze its running time.

// // Running Time of Algorithms
// // The running time of an algorithm for a specific input depends on the number of operations executed. The greater the number of operations, the longer the running time of an algorithm. We usually want to know how many operations an algorithm will execute in proportion to the size of its input, which we will call .

// // What is the ratio of the running time of Insertion Sort to the size of the input? To answer this question, we need to examine the algorithm.

// // Analysis of Insertion Sort
// // For each element  in an array of  numbers, Insertion Sort compares the number to those to its left until it reaches a lower value element or the start. At that point it shifts everything to the right up one and inserts  into the array.

// // How long does all that shifting take?

// // In the best case, where the array was already sorted, no element will need to be moved, so the algorithm will just run through the array once and return the sorted array. The running time would be directly proportional to the size of the input, so we can say it will take  time.

// // However, we usually focus on the worst-case running time (computer scientists are pretty pessimistic). The worst case for Insertion Sort occurs when the array is in reverse order. To insert each number, the algorithm will have to shift over that number to the beginning of the array. Sorting the entire array of  numbers will therefore take  operations, which is  (almost ). Computer scientists just round that up (pick the dominant term) to  and say that Insertion Sort is an " time" algorithm.

// // running-time-picture

// // What this means
// // The running time of the algorithm against an array of  elements is . For  elements, it will be . Insertion Sort can work well for small inputs or if you know the data is likely to be nearly sorted, like check numbers as they are received by a bank. The running time becomes unreasonable for larger inputs.

// // Challenge
// // Can you modify your previous Insertion Sort implementation to keep track of the number of shifts it makes while sorting? The only thing you should print is the number of shifts made by the algorithm to completely sort the array. A shift occurs when an element's position changes in the array. Do not shift an element if it is not necessary.

// // Function Description

// // Complete the runningTime function in the editor below.

// // runningTime has the following parameter(s):

// // int arr[n]: an array of integers
// // Returns

// // int: the number of shifts it will take to sort the array
// // Input Format

// // The first line contains the integer , the number of elements to be sorted.
// // The next line contains  integers of .

// // Constraints

// // Sample Input

// // STDIN       Function
// // -----       --------
// // 5           arr[] size n =5
// // 2 1 3 1 2   arr = [2, 1, 3, 1, 2]
// // Sample Output

// // 4
// // Explanation

// // Iteration   Array      Shifts
// // 0           2 1 3 1 2
// // 1           1 2 3 1 2     1
// // 2           1 2 3 1 2     0
// // 3           1 1 2 3 2     2
// // 4           1 1 2 2 3     1

// // Total                     4
// const arr = []
// function runningTime (arr) {
//   // Write your code here
//   let counter = 0
//   for (let i = 0; i < arr.length - 1; i++) {
//     if (arr[i] > arr[i + 1]) {
//       const temp = arr[i]
//       arr[i] = arr[i + 1]
//       arr[i + 1] = temp
//       counter++
//       i = -1
//     }
//   }
//   return counter
// }
// runningTime(arr)
// Comparison Sorting
// Quicksort usually has a running time of , but is there an algorithm that can sort even faster? In general, this is not possible. Most sorting algorithms are comparison sorts, i.e. they sort a list just by comparing the elements to one another. A comparison sort algorithm cannot beat  (worst-case) running time, since  represents the minimum number of comparisons needed to know where to place each element. For more details, you can see these notes (PDF).

// Alternative Sorting
// Another sorting method, the counting sort, does not require comparison. Instead, you create an integer array whose index range covers the entire range of values in your array to sort. Each time a value occurs in the original array, you increment the counter at that index. At the end, run through your counting array, printing the value of each non-zero valued index that number of times.

// Example

// All of the values are in the range , so create an array of zeros, . The results of each iteration follow:

// i	arr[i]	result
// 0	1	[0, 1, 0, 0]
// 1	1	[0, 2, 0, 0]
// 2	3	[0, 2, 0, 1]
// 3	2	[0, 2, 1, 1]
// 4	1	[0, 3, 1, 1]
// The frequency array is . These values can be used to create the sorted array as well: .

// Note
// For this exercise, always return a frequency array with 100 elements. The example above shows only the first 4 elements, the remainder being zeros.

// Challenge
// Given a list of integers, count and return the number of times each value appears as an array of integers.

// Function Description

// Complete the countingSort function in the editor below.

// countingSort has the following parameter(s):

// arr[n]: an array of integers
// Returns

// int[100]: a frequency array
// Input Format

// The first line contains an integer , the number of items in .
// Each of the next  lines contains an integer  where .

// Constraints

// Sample Input

// 100
// 63 25 73 1 98 73 56 84 86 57 16 83 8 25 81 56 9 53 98 67 99 12 83 89 80 91 39 86 76 85 74 39 25 90 59 10 94 32 44 3 89 30 27 79 46 96 27 32 18 21 92 69 81 40 40 34 68 78 24 87 42 69 23 41 78 22 6 90 99 89 50 30 20 1 43 3 70 95 33 46 44 9 69 48 33 60 65 16 82 67 61 32 21 79 75 75 13 87 70 33
// Sample Output

// 0 2 0 2 0 0 1 0 1 2 1 0 1 1 0 0 2 0 1 0 1 2 1 1 1 3 0 2 0 0 2 0 3 3 1 0 0 0 0 2 2 1 1 1 2 0 2 0 1 0 1 0 0 1 0 0 2 1 0 1 1 1 0 1 0 1 0 2 1 3 2 0 0 2 1 2 1 0 2 2 1 2 1 2 1 1 2 2 0 3 2 1 1 0 1 1 1 0 2 2
// Explanation

// Each of the resulting values  represents the number of times  appeared in .
const arr = [1, 1, 3, 2, 1]
function countingSort (arr) {
  // Write your code here
  const counts = Array(arr.length).fill(0)
  arr.forEach(item => { ++counts[item] })
  console.log(counts)
  return counts
}
countingSort(arr)
