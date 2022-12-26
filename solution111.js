// Goodland is a country with a number of evenly spaced cities along a line. The distance between adjacent cities is  unit. There is an energy infrastructure project planning meeting, and the government needs to know the fewest number of power plants needed to provide electricity to the entire list of cities. Determine that number. If it cannot be done, return -1.

// You are given a list of city data. Cities that may contain a power plant have been labeled . Others not suitable for building a plant are labeled . Given a distribution range of , find the lowest number of plants that must be built such that all cities are served. The distribution range limits supply to cities where distance is less than k.

// Example

// Each city is  unit distance from its neighbors, and we'll use  based indexing. We see there are  cities suitable for power plants, cities  and . If we build a power plant at , it can serve  through  because those endpoints are at a distance of  and . To serve , we would need to be able to build a plant in city  or . Since none of those is suitable, we must return -1. It cannot be done using the current distribution constraint.

// Function Description

// Complete the pylons function in the editor below.

// pylons has the following parameter(s):

// int k: the distribution range
// int arr[n]: each city's suitability as a building site
// Returns

// int: the minimum number of plants required or -1
// Input Format

// The first line contains two space-separated integers  and , the number of cities in Goodland and the plants' range constant.
// The second line contains  space-separated binary integers where each integer indicates suitability for building a plant.

// Constraints

// Each .
// Subtask

//  for  of the maximum score.
// Output Format

// Print a single integer denoting the minimum number of plants that must be built so that all of Goodland's cities have electricity. If this is not possible for the given value of , print .

// Sample Input

// STDIN         Function
// -----         --------
// 6 2           arr[] size n = 6, k = 2
// 0 1 1 1 1 0   arr = [0, 1, 1, 1, 1, 0]
// Sample Output

// 2
// Explanation

// Cities , , , and  are suitable for power plants. Each plant will have a range of . If we build in cities  cities,  and , then all cities will have electricity.
const k = 2
const arr = [0, 1, 1, 1, 1, 0]
function pylons (k, arr) {
  // Write your code here
  let minPowerPlants = 0
  let i = 0
  let towerLocation = i + (k - 1)

  while (i < arr.length) {
    if (arr[towerLocation] === 1) {
      i = towerLocation + k // Next city that doesn't have power
      towerLocation = i + (k - 1) // Next location for power plant
      minPowerPlants++ // We can place a power plant here

      // Reset towerLocation to last city if it exceeds the max index in array
      if (towerLocation >= arr.length) {
        towerLocation = arr.length - 1
      }
    } else {
      // Check if any of the previous cities are suitable for power plant or not
      towerLocation--

      // towerLocation <= i - k means to make sure we do not go back to previous region where there is already a power plant serving the max cities possible.
      if (towerLocation < 0 || towerLocation <= i - k) {
        return -1
      }
    }
  }

  return minPowerPlants
}
pylons(k, arr)
