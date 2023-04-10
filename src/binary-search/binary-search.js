/*
 * Copyright (c) 2023 Yuriy R. | github: HiddenUndefined
 *
 * This file is part of the «Algorithms in JS» | github: algorithms-in-js.
 *
 * The Algorithms in JS is licensed under the MIT License.
 * See the LICENSE file in the project root for more information.
 */

/**
 * Function answers
 */
const answers = {
  muchExecute: 'Error: To much execute.',
  notFound: 'Not found'
}

/**
 * Binary search
 * @param arr
 * @param targetNumber
 * @param viewLog
 * @return {number|string}
 */
function binarySearch (arr, targetNumber, viewLog = false) {
  // Values
  let low = 0,
      mid = 0,
      high = arr.length - 1,
      count = 0

  while (low <= high) {
    // Update search counter
    count += 1
    // Get middle value
    mid = Math.floor((low + high) / 2)
    // Get value by index by middle value
    const valueByIndex = arr[mid]

    // Defence
    if (count > arr.length) {
      return answers.muchExecute
    }
    // Conditions
    if (valueByIndex === targetNumber) {
      // View log
      if (viewLog) console.log(`Target: ${ targetNumber }, target index: ${ mid }, count for search: ${ count }`)
      // Exit from loop and return target value index
      return mid
    } else if (valueByIndex < targetNumber) {
      // Continue while...
      low = mid + 1
    } else if (valueByIndex > targetNumber) {
      // Continue while...
      high = mid - 1
    }
  }

  return answers.notFound
}

// Export
module.exports = {
  answers,
  binarySearch
}
