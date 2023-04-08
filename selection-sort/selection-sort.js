/*
 * Copyright (c) 2023 Yuriy R. | github: HiddenUndefined
 *
 * This file is part of the «Algorithms in JS» | github: algorithms-in-js.
 *
 * The Algorithms in JS is licensed under the MIT License.
 * See the LICENSE file in the project root for more information.
 */

/**
 * Selection sort
 * @param arr {number[]}
 * @return {number[]}
 */
function selectionSort (arr) {
  // Array length
  const arrayLength = arr.length
  // Min value index from array
  let min

  // First cycle
  for (let i = 0; i < arrayLength; i++) {
    // Get first min value index
    min = i

    // Second cycle: start from next index from parent index
    for (let j = i + 1; j < arrayLength; j++) {
      // Compare by minimal value
      if (arr[min] > arr[j]) {
        // Update min value index
        min = j
      }
    }

    if (min !== i) {
      [arr[i], arr[min]] = [arr[min], arr[i]]
    }
  }

  // Returned sorted array
  return arr
}

/**
 * Non-sorted numbers arrays
 * @type {number[]}
 */
const smallArray = [1, 4, 3, 2]
const middleArray = [9, 0, 5, 1, 4, 8, 3, 7, 6, 2]
const largeArray = [
  1, 3, 19333, 10039, 8, 10, 14, 56, 58, 61, 14995,
  103, 105, 106, 933, 2034, 3059, 5069, 6093, 115, 932, 7758,
  1059, 2033, 109, 113, 114, 4, 5, 8391, 9948,
  19312, 19323, 10392, 13491, 17593, 88, 93
]

// Print result to console
console.group('Result')
console.log(selectionSort(smallArray))
console.log(selectionSort(middleArray))
console.log(selectionSort(largeArray))
console.groupEnd()
