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

// Export
module.exports = selectionSort
