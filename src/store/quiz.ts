import { defineStore } from 'pinia'
import { QuizState } from '@/enums/QuizState'
import { getRandomIndices } from '@/utils/getRandomItems'
import Questions from '@/data/quiz.json'
import type { QuizQuestion } from '@/types/QuizQuestion'
import { usePeerStore } from '@/store/peer'

export interface QuizStore {
  state: QuizState
  questionCount: number
  questionIds: number[]
  currentQuestionId: number | null
  countdownDuration: number
  countdownStart: Date | null
  countdown: number | undefined
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
    countdown: undefined,
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

    addQuestionId(questionId: number) {
      this.questionIds.push(questionId)
    },

    resetCountdown() {
      clearTimeout(this.countdown)
      this.countdown = undefined
      this.countdownStart = null
    },

    startCountdown() {
      this.countdownStart = new Date()

      this.countdown = setTimeout(() => {
        if (this.state === QuizState.ShowAnswers) {
          this.state = QuizState.LockAnswers
        }
      }, this.countdownDuration * 1000)
    },

    setState(state: QuizState) {
      const peer = usePeerStore()

      this.state = state

      switch (state) {
        case QuizState.Waiting:
          peer.send({
            state,
          })
          break
        case QuizState.StartQuiz:
          peer.send({
            state,
            questionCount: this.questionCount,
            countdownDuration: this.countdownDuration,
          })
          break
        case QuizState.ShowQuestion:
          peer.send({
            state,
            currentQuestionId: this.currentQuestionId,
          })
          break
        case QuizState.ShowAnswers:
          this.startCountdown()
          peer.send({
            state,
          })
          break
        case QuizState.LockAnswers:
          peer.send({
            state,
          })
          break
        case QuizState.ShowCorrectAnswer:
          peer.send({
            state,
          })
          break
        case QuizState.ShowQuestionResults:
          peer.send({
            state,
            players: this.players,
          })
          break
        case QuizState.ShowResults:
          peer.send({
            state,
          })
          break
        case QuizState.NextQuestion:
          this.nextQuestion()
          this.resetCountdown()
          this.resetCurrentAnswer()
          peer.send({
            state,
          })
          break
        default:
          break
      }
    },

    nextState() {
      const nextStateMap: Record<QuizState, QuizState> = {
        [QuizState.Waiting]: QuizState.StartQuiz,
        [QuizState.StartQuiz]: QuizState.ShowQuestion,
        [QuizState.ShowQuestion]: QuizState.ShowAnswers,
        [QuizState.ShowAnswers]: QuizState.LockAnswers,
        [QuizState.LockAnswers]: QuizState.ShowCorrectAnswer,
        [QuizState.ShowCorrectAnswer]: QuizState.ShowQuestionResults,
        [QuizState.ShowQuestionResults]: (() => {
          if (this.currentQuestionIndex === null) {
            throw new Error('Current question index is null')
          }

          if (this.currentQuestionIndex % 2 === 0) {
            return QuizState.ShowResults
          }
          else {
            return QuizState.NextQuestion
          }
        })(),
        [QuizState.NextQuestion]: QuizState.ShowQuestion,
        [QuizState.ShowResults]: QuizState.NextQuestion,
      }

      if (nextStateMap[this.state] !== undefined) {
        this.setState(nextStateMap[this.state])
      }
    },

    setCurrentQuestion(questionId: number) {
      this.currentQuestionId = questionId
    },

    setCurrentAnswer(answerId: number) {
      this.currentAnswerId = answerId
    },

    resetCurrentAnswer() {
      this.currentAnswerId = null
    },

    addPlayer(id: string, name: string) {
      this.players.push({
        id,
        name,
        answers: [],
      })
    },

    setPlayerAnswer(id: string, answerId: number) {
      const player = this.players.find(player => player.id === id)

      if (!player) {
        throw new Error('Player not found')
      }

      const index = this.currentQuestionIndex

      if (index === null) {
        throw new Error('Current question index is null')
      }

      player.answers[index] = answerId
    },

    getPlayerAnswersByIndex(index: number) {
      return this.players.reduce((acc, player) => {
        acc.set(player.id, {
          name: player.name,
          answer: player.answers[index],
          correct: this.isCorrectAnswer(this.questionIds[index], player.answers[index]),
        })
        return acc
      }, new Map<string, {
        name: string
        answer: number
        correct: boolean
      }>())
    },

    getPlayerAnswersByQuestion(questionId: number) {
      const index = this.questionIds.indexOf(questionId)

      if (index === -1) {
        throw new Error('Question ID not found')
      }

      return this.getPlayerAnswersByIndex(index)
    },

    isCorrectAnswer(questionId: number, answerId: number) {
      const question = Questions[questionId]

      if (!question) {
        throw new Error('Question not found')
      }

      return question.answerId === answerId
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

    overallResults: (state) => {
      const correctAnswersMap = new Map(state.questionIds.map(id => [id, Questions[id].answerId]))

      const results = state.players.map((player) => {
        const correctAnswers = player.answers.filter((answer, index) =>
          correctAnswersMap.get(state.questionIds[index]) === answer,
        )

        return {
          name: player.name,
          correctAnswerCount: correctAnswers.length,
        }
      })

      return results
    },
  },
})
