// Given an array of stick lengths, use  of them to construct a non-degenerate triangle with the maximum possible perimeter. Return an array of the lengths of its sides as  integers in non-decreasing order.

// If there are several valid triangles having the maximum perimeter:

// Choose the one with the longest maximum side.
// If more than one has that maximum, choose from them the one with the longest minimum side.
// If more than one has that maximum as well, print any one them.
// If no non-degenerate triangle exists, return .

// Example

// The triplet  will not form a triangle. Neither will  or , so the problem is reduced to  and . The longer perimeter is .

// Function Description

// Complete the maximumPerimeterTriangle function in the editor below.

// maximumPerimeterTriangle has the following parameter(s):

// int sticks[n]: the lengths of sticks available
// Returns

// int[3] or int[1]: the side lengths of the chosen triangle in non-decreasing order or -1
// Input Format

// The first line contains single integer , the size of array .
// The second line contains  space-separated integers , each a stick length.

// Constraints

// Sample Input 0

// 5
// 1 1 1 3 3
// Sample Output 0

// 1 3 3
// Explanation 0

// There are  possible unique triangles:

// The second triangle has the largest perimeter, so we print its side lengths on a new line in non-decreasing order.

// Sample Input 1

// 3
// 1 2 3
// Sample Output 1

// -1
// Explanation 1

// The triangle  is degenerate and thus can't be constructed, so we print -1 on a new line.

// Sample Input 2

// 6
// 1 1 1 2 3 5
// Sample Output 2

// 1 1 1
// Explanation 2

// The triangle (1,1,1) is the only valid triangle.
// const sticks = [1, 1, 1, 3, 3]
// const sticks = [1, 2, 3]
// const sticks = [1, 2, 3, 4, 5, 10]
const sticks = [3, 9, 2, 15, 3]
function maximumPerimeterTriangle (sticks) {
  console.log(sticks)
  const sortedSticks = sticks.sort((a, b) => {
    return a - b
  })
  console.log(sortedSticks)
  let i = sortedSticks.length - 3
  while (i >= 0) {
    if (sortedSticks[i] + sortedSticks[i + 1] > sortedSticks[i + 2]) {
      // non-degenrated triangle
      break
    } else {
      i = i - 1
    }
  }
  if (i < 0) {
    console.log('-1')
    return [-1]
  } else {
    console.log([sortedSticks[i], sortedSticks[i + 1], sortedSticks[i + 2]])
    return [sortedSticks[i], sortedSticks[i + 1], sortedSticks[i + 2]]
  }
}
maximumPerimeterTriangle(sticks)
// function maximumPerimeterTriangle (sticks) {
//   // Write your code here

//   const result = []
//   const perimeter = {}
//   for (let i = 0; i < sticks.length; i += 3) {
//     const chunk = sticks.slice(i, i + 3)
//     // console.log(chunk)
//     if (chunk.length === 3) {
//       result.push(chunk)
//     }

//     i = i - 2
//   }
//   // console.log(result)
//   if (result.length > 0) {
//     for (const chunk in result) {
//     //   console.log('subset', result[chunk])
//       // check for non-degenrated triangle
//       const subset = result[chunk]
//         console.log('subset', subset)

//       //   for (const key in subset) {

//       const ASide = subset[0]
//       const BSide = subset[1]
//       const CSide = subset[2]
//       // console.log('ASide,BSide,CSide', ASide, BSide, CSide)

//       if (ASide + BSide > CSide && BSide + CSide > ASide && CSide + ASide > BSide) {
//         console.log('non-degenerate', ASide, BSide, CSide)

//         perimeter[ASide + BSide + CSide] = ([ASide, BSide, CSide])
//       } else {
//         console.log('degenerate', ASide, BSide, CSide)
//       }
//     }
//   }
//   let max = 0
//   if (perimeter !== null && perimeter !== 'undefined' && Object.keys(perimeter).length !== 0) {
//     // console.log('perimeter : ', perimeter)

//     // console.log(Object.keys(perimeter))
//     // console.log(Math.max(...Object.keys(perimeter)))
//     // console.log(perimeter[Math.max(...Object.keys(perimeter))])
//     for (let kProp in perimeter) {
//       // console.log('kProp', typeof kProp, kProp)
//       if (Number(kProp) > Number(max)) {
//         max = kProp
//         // console.log('if max', max)
//       } else {
//         // console.log('else max', kProp, max)
//       }

//     }
//     console.log('max', max)
//     console.log(perimeter[max])
//     return perimeter[max]
//   } else {
//     console.log('-1')
//     return -1
//   }
// }
