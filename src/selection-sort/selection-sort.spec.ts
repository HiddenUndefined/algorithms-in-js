// Import
const { selectionSort } = require('./selection-sort')

// Describe test
describe('selectionSort()', () => {
  it('should sorted simple array', () => {
    expect(selectionSort([1, 3, 2])).toEqual([1, 2, 3])
    expect(selectionSort([104, 1, 33, 5, 2, 4, 3, 9])).toEqual([1, 2, 3, 4, 5, 9, 33, 104])
  })
})
