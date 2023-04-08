/*
 * Copyright (c) 2023 Yuriy R. | github: HiddenUndefined
 *
 * This file is part of the «Algorithms in JS» | github: algorithms-in-js.
 *
 * The Algorithms in JS is licensed under the MIT License.
 * See the LICENSE file in the project root for more information.
 */

/**
 * Binary search
 * @param arr
 * @param targetNumber
 * @param viewLog
 * @return {string}
 */
function binarySearch (arr, targetNumber, viewLog = false) {
  // Values
  let low = 0,
      mid = 0,
      high = arr.length - 1,
      count = 0
  // Date
  const date = new Date(Date.now())

  while (low <= high) {
    // Update search counter
    count += 1
    // Get middle value
    mid = Math.floor((low + high) / 2)
    // Get value by index by middle value
    const valueByIndex = arr[mid]

    // View log by condition
    if (viewLog) {
      console.group(`Count: #${ count }`)
      console.log(`low: ${ low }`)
      console.log(`mid: ${ mid }`)
      console.log(`high: ${ high }`)
      console.log(`valueByIndex: ${ valueByIndex }`)
      console.log(`time: ${ date.getTime() }`)
      console.groupEnd()
    }

    // Defence
    if (count > arr.length) {
      return 'Error: To much execute.'
    }
    // Conditions
    if (valueByIndex === targetNumber) {
      return `Target: ${ targetNumber }, target index: ${ mid }, count for search: ${ count }`
    } else if (valueByIndex < targetNumber) {
      low = mid + 1
    } else if (valueByIndex > targetNumber) {
      high = mid - 1
    }
  }

  return 'Not found'
}

/**
 * Sorted numbers array
 * @type {number[]}
 */
const exampleArray = [
  1, 3, 4, 5, 8, 10, 14, 56, 58, 61, 88, 93,
  103, 105, 106, 109, 113, 114, 115, 932, 933,
  1059, 2033, 2034, 3059, 5069, 6093, 7758, 8391, 9948,
  10039, 10392, 13491, 14995, 17593, 19312, 19323, 19333
]

// Print result to console
console.group('Result')
console.log(binarySearch(exampleArray, 0.1))
console.log(binarySearch(exampleArray, 1))
console.log(binarySearch(exampleArray, 58))
console.log(binarySearch(exampleArray, 58.9))
console.log(binarySearch(exampleArray, 933))
console.log(binarySearch(exampleArray, 8391))
console.log(binarySearch(exampleArray, 19333))
console.log(binarySearch(exampleArray, 4995912))
console.groupEnd()
