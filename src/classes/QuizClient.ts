import Questions from '@/data/quiz.json'

export class QuizPlayer {
  readonly answers = new Map<number, number>()

  constructor(readonly id: string, readonly name: string) {}

  setAnswer(questionId: number, answerId: number) {
    this.answers.set(questionId, answerId)
  }

  checkAnswer(questionId: number) {
    const question = Questions[questionId]

    if (!question) {
      throw new Error(`Question ${questionId} not found`)
    }

    const answerId = this.answers.get(questionId)

    if (answerId === undefined) {
      throw new Error(`Answer for question ${questionId} not found`)
    }

    return question.answerId === answerId
  }

  getCorrectAnswers() {
    return Questions.filter((question, index) => {
      return this.checkAnswer(index)
    })
  }

  countCorrectAnswers() {
    return this.getCorrectAnswers().length
  }
}
