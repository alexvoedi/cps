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
    answers: Array<number | null>
    focus: boolean
  }>
  currentAnswerId: number | null
}

export const useQuizStore = defineStore('quiz-store', {
  state: (): QuizStore => ({
    state: QuizState.Waiting,
    questionCount: 2,
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
    },

    setQuestion(questionId: number) {
      this.currentQuestionId = questionId
    },

    nextQuestion() {
      if (this.currentQuestionId === null) {
        this.currentQuestionId = this.questionIds[0]
      }
      else {
        const currentIndex = this.questionIds.indexOf(this.currentQuestionId)

        if (currentIndex === this.questionCount - 1) {
          throw new Error('Current question is the last question')
        }

        this.currentQuestionId = this.questionIds[currentIndex + 1]
      }
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

      this.countdown = window.setTimeout(() => {
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
          this.fillPlayerAnswers()
          this.resetCountdown()
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
            players: this.players,
          })
          break
        case QuizState.NextQuestion:
          this.nextQuestion()
          this.resetCountdown()
          this.resetCurrentAnswer()
          peer.send({
            state,
            currentQuestionId: this.currentQuestionId,
          })
          break
        case QuizState.EndQuiz:
          peer.send({
            state,
            players: this.players,
          })
          break
        default:
          break
      }
    },

    nextState() {
      const nextStateMap: Record<QuizState, QuizState> = {
        [QuizState.Waiting]: QuizState.ShowResults,
        [QuizState.StartQuiz]: QuizState.NextQuestion,
        [QuizState.ShowQuestion]: QuizState.ShowAnswers,
        [QuizState.ShowAnswers]: QuizState.LockAnswers,
        [QuizState.LockAnswers]: QuizState.ShowCorrectAnswer,
        [QuizState.ShowCorrectAnswer]: QuizState.ShowQuestionResults,
        [QuizState.ShowQuestionResults]: (() => {
          if (this.currentQuestionIndex === null) {
            return QuizState.NextQuestion
          }
          else if (this.currentQuestionIndex === 0) {
            return QuizState.NextQuestion
          }
          else if (this.currentQuestionIndex % 10 === 0) {
            return QuizState.ShowResults
          }
          else if (this.currentQuestionIndex === this.questionCount - 1) {
            return QuizState.EndQuiz
          }
          else {
            return QuizState.NextQuestion
          }
        })(),
        [QuizState.NextQuestion]: QuizState.ShowQuestion,
        [QuizState.ShowResults]: (() => {
          if (this.currentQuestionIndex === null) {
            return QuizState.StartQuiz
          }
          else if (this.currentQuestionIndex === this.questionCount - 1) {
            return QuizState.ShowResults
          }
          else {
            return QuizState.NextQuestion
          }
        })(),
        [QuizState.EndQuiz]: QuizState.ShowResults,
      }

      if (nextStateMap[this.state] !== undefined) {
        this.setState(nextStateMap[this.state])
      }
    },

    setCurrentQuestion(questionId: number) {
      this.currentQuestionId = questionId
    },

    setCurrentAnswer(answer: number | null) {
      this.currentAnswerId = answer
    },

    resetCurrentAnswer() {
      this.currentAnswerId = null
    },

    addPlayer(id: string, name: string) {
      this.players.push({
        id,
        name,
        answers: [],
        focus: true,
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
        answer: number | null
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

    isCorrectAnswer(questionId: number, answerIdOrNull: number | null) {
      const question = Questions[questionId]

      if (!question) {
        throw new Error('Question not found')
      }

      return question.answerId === answerIdOrNull
    },

    fillPlayerAnswers() {
      this.players.forEach((player) => {
        if (player.answers.length < this.questionCount) {
          player.answers.push(null)
        }
      })
    },

    getPlayerAnswerArray(playerId: string) {
      // correct answer: true
      // wrong answer: false
      // not answered: null

      if (this.currentQuestionIndex === null) {
        return []
      }

      const player = this.players.find(player => player.id === playerId)

      if (!player) {
        throw new Error('Player not found')
      }

      const array: Array<boolean | null> = []

      for (let index = 0; index <= this.currentQuestionIndex; index++) {
        if (player.answers[index] === null) {
          array.push(null)
        }
        else {
          array.push(this.isCorrectAnswer(this.questionIds[index], player.answers[index]))
        }
      }

      return array
    },

    getPlayerResults(playerId: string) {
      const player = this.players.find(player => player.id === playerId)

      if (!player) {
        throw new Error('Player not found')
      }

      let correct = 0
      let wrong = 0
      let notAnswered = 0

      player.answers.forEach((answer, index) => {
        if (answer === null) {
          notAnswered++
        }
        else if (this.isCorrectAnswer(this.questionIds[index], answer)) {
          correct++
        }
        else {
          wrong++
        }
      })

      return {
        correct,
        wrong,
        notAnswered,
      }
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
