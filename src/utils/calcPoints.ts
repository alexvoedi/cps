/**
 * correct answer: 100 points
 * wrong answer: -30 points
 * not answered: 0 points
 * for every consecutive correct answer: +10 points
 */
export function calcPoints(answers: Array<boolean | null>) {
  let points = 0
  let streak = 0

  for (const answer of answers) {
    if (answer === true) {
      points += 100 + streak * 10
      streak++
    }
    else if (answer === false) {
      points -= 30
      streak = 0
    }
    else {
      streak = 0
    }
  }

  return points
}
