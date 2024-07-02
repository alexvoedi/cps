import { describe } from 'vitest'
import { calcPoints } from './calcPoints'

describe('calcPoints', (it) => {
  it('should return 0 for an empty array', ({ expect }) => {
    const answers: Array<boolean | null> = []
    const points = calcPoints(answers)
    expect(points).toBe(0)
  })

  it('should return 100 for a correct answer', ({ expect }) => {
    const answers = [true]
    const points = calcPoints(answers)
    expect(points).toBe(100)
  })

  it('should return -30 for a wrong answer', ({ expect }) => {
    const answers = [false]
    const points = calcPoints(answers)
    expect(points).toBe(-30)
  })

  it('should return 0 for a not answered question', ({ expect }) => {
    const answers = [null]
    const points = calcPoints(answers)
    expect(points).toBe(0)
  })

  it('should return 110 for two consecutive correct answers', ({ expect }) => {
    const answers = [true, true]
    const points = calcPoints(answers)
    expect(points).toBe(210)
  })

  it('should return 390 for two consecutive correct answers, one wrong answer and two consecutive correct answers', ({ expect }) => {
    const answers = [true, true, false, true, true]
    const points = calcPoints(answers)
    expect(points).toBe(390)
  })
})
