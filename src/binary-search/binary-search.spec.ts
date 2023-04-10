// Import
const { answers, binarySearch } = require('./binary-search')

// Describe test
describe('binarySearch()', () => {
  it('should find value index in array', () => {
    expect(binarySearch([0, 3, 59, 0.1, 43, 591], 3)).toBe(1)
    expect(binarySearch([1, 5, 2, 4, 3, 9], 3)).toBe(4)
  })

  it('should return «Not found» when value index not founded in array', () => {
    expect(binarySearch([1, 3, 2], 5)).toBe(answers.notFound)
  })
})
