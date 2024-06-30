import { describe } from 'vitest'
import { getRandomIndices } from './getRandomIndices'

describe('calcPoints', (it) => {
  it('should return 0 indices for an empty array', ({ expect }) => {
    const indices = getRandomIndices([], 0)
    expect(indices).toEqual([])
  })

  it('should return 4 indices', ({ expect }) => {
    const indices = getRandomIndices([1, 2, 3, 4, 5, 6], 4)
    expect(indices.length).toBe(4)
  })

  it('should return not more indices than there are items in the array', ({ expect }) => {
    const indices = getRandomIndices([1, 2, 3], 5)
    expect(indices.length).toBe(3)
  })
})
