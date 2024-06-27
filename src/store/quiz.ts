import { defineStore } from 'pinia'
import { QuizState } from '@/enums/QuizState'
import { getRandomIndices } from '@/utils/getRandomItems'
import Questions from '@/data/quiz.json'
import type { QuizQuestion } from '@/types/QuizQuestion'

export interface QuizStore {
  state: QuizState
  questionCount: number
  questionIds: number[]
  currentQuestionId: number | null
  countdownDuration: number
  countdownStart: Date | null
  players: Array<{
    id: string
    name: string
    answers: number[]
  }>
  currentAnswerId: number | null
}

export const useQuizStore = defineStore('quiz-store', {
  state: (): QuizStore => ({
    state: QuizState.Waiting,
    questionCount: 30,
    questionIds: [],
    currentQuestionId: null,
    countdownDuration: 15,
    countdownStart: null,
    players: [],
    currentAnswerId: null,
  }),

  actions: {
    init() {
      this.questionIds = getRandomIndices(Questions, this.questionCount)
      this.currentQuestionId = this.questionIds[0]
    },

    setQuestion(questionId: number) {
      this.currentQuestionId = questionId
    },

    nextQuestion() {
      if (this.currentQuestionId === null) {
        throw new Error('Current question ID is null')
      }

      const currentIndex = this.questionIds.indexOf(this.currentQuestionId)

      if (currentIndex === this.questionCount - 1) {
        throw new Error('Current question is the last question')
      }

      this.currentQuestionId = this.questionIds[currentIndex + 1]
    },

    resetCountdown() {
      this.countdownStart = new Date()
    },

    startCountdown() {
      this.countdownStart = new Date()

      setTimeout(() => {
        if (this.state === QuizState.ShowAnswers) {
          this.state = QuizState.LockAnswers
        }
      }, this.countdownDuration * 1000)
    },

    setState(state: QuizState) {
      this.state = state

      switch (state) {
        case QuizState.Waiting:
          break
        case QuizState.StartQuiz:
          break
        case QuizState.ShowQuestion:
          break
        case QuizState.ShowAnswers:
          this.startCountdown()
          break
        case QuizState.LockAnswers:
          break
        case QuizState.ShowCorrectAnswer:
          break
        case QuizState.ShowQuestionResults:
          break
        case QuizState.NextQuestion:
          this.nextQuestion()
          this.resetCountdown()
          this.resetCurrentAnswer()
          break
        default:
          break
      }
    },

    nextState() {
      switch (this.state) {
        case QuizState.Waiting:
          this.setState(QuizState.StartQuiz)
          break
        case QuizState.StartQuiz:
          this.setState(QuizState.ShowQuestion)
          break
        case QuizState.ShowQuestion:
          this.setState(QuizState.ShowAnswers)
          break
        case QuizState.ShowAnswers:
          this.setState(QuizState.LockAnswers)
          break
        case QuizState.LockAnswers:
          this.setState(QuizState.ShowCorrectAnswer)
          break
        case QuizState.ShowCorrectAnswer:
          this.setState(QuizState.ShowQuestionResults)
          break
        case QuizState.ShowQuestionResults:
          this.setState(QuizState.NextQuestion)
          break
        case QuizState.NextQuestion:
          this.setState(QuizState.ShowQuestion)
          break
        default:
          break
      }
    },

    setCurrentAnswer(answerId: number) {
      this.currentAnswerId = answerId
    },

    resetCurrentAnswer() {
      this.currentAnswerId = null
    },
  },

  getters: {
    currentQuestion: (state): QuizQuestion | null => {
      if (state.currentQuestionId === null) {
        return null
      }

      return Questions[state.currentQuestionId]
    },

    currentQuestionIndex: (state) => {
      if (state.currentQuestionId === null) {
        return null
      }

      return state.questionIds.indexOf(state.currentQuestionId)
    },
  },
})
