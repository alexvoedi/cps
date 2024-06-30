import { acceptHMRUpdate, defineStore } from 'pinia'
import { QuizState } from '@/enums/QuizState'
import { getRandomIndices } from '@/utils/getRandomIndices'
import Questions from '@/data/quiz.json'
import type { QuizQuestion } from '@/types/QuizQuestion'
import { usePeerStore } from '@/store/peer'
import { getNextStateForShowQuestionResults, getNextStateForShowResults } from '@/utils/getNextState'
import type { QuizPlayer } from '@/types/QuizPlayer'
import { MessageType } from '@/enums/MessageType'

export interface QuizStore {
  state: QuizState
  questionCount: number
  questionIds: number[]
  currentQuestionId: number | null
  countdownDuration: number
  countdownStart: Date | null
  countdown: number | undefined
  players: QuizPlayer[]
  currentAnswerId: Ref<number | null>
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
    currentAnswerId: useLocalStorage('currentAnswerId', null, {
      serializer: {
        read(value) {
          return value === 'null' ? null : Number.parseInt(value)
        },
        write(value) {
          return value === null ? 'null' : value.toString()
        },
      },
    }),
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
      this.countdown = undefined
      this.countdownStart = null
    },

    initCountdown() {
      this.countdownStart = new Date()
    },

    startCountdown() {
      this.countdown = window.setTimeout(() => {
        if (this.state === QuizState.ShowAnswers) {
          this.setState(QuizState.LockAnswers)
        }
      }, this.countdownDuration * 1000)
    },

    stopCountdown() {
      clearTimeout(this.countdown)
    },

    setState(state: QuizState) {
      const peer = usePeerStore()

      this.state = state

      const data = {}

      switch (state) {
        case QuizState.Waiting:
          break
        case QuizState.StartQuiz:
          Object.assign(data, {
            questionCount: this.questionCount,
            countdownDuration: this.countdownDuration,
          })
          break
        case QuizState.ShowQuestion:
          Object.assign(data, {
            currentQuestionId: this.currentQuestionId,
          })
          break
        case QuizState.ShowAnswers:
          this.initCountdown()
          this.startCountdown()
          break
        case QuizState.LockAnswers:
          this.fillPlayerAnswers()
          this.stopCountdown()
          this.resetCountdown()
          break
        case QuizState.ShowCorrectAnswer:
          break
        case QuizState.ShowQuestionResults:
          Object.assign(data, {
            players: this.players,
          })
          break
        case QuizState.ShowResults:
          Object.assign(data, {
            players: this.players,
          })
          break
        case QuizState.NextQuestion:
          this.nextQuestion()
          this.resetCountdown()
          this.resetCurrentAnswer()
          Object.assign(data, {
            currentQuestionId: this.currentQuestionId,
          })
          break
        case QuizState.EndQuiz:
          Object.assign(data, {
            players: this.players,
          })
          break
        default:
          break
      }

      peer.send({
        type: MessageType.Quiz,
        state,
        ...data,
      })
    },

    nextState() {
      const nextStateMap: Record<QuizState, QuizState> = {
        [QuizState.Waiting]: QuizState.ShowResults,
        [QuizState.StartQuiz]: QuizState.NextQuestion,
        [QuizState.ShowQuestion]: QuizState.ShowAnswers,
        [QuizState.ShowAnswers]: QuizState.LockAnswers,
        [QuizState.LockAnswers]: QuizState.ShowCorrectAnswer,
        [QuizState.ShowCorrectAnswer]: QuizState.ShowQuestionResults,
        [QuizState.ShowQuestionResults]: getNextStateForShowQuestionResults(this),
        [QuizState.NextQuestion]: QuizState.ShowQuestion,
        [QuizState.ShowResults]: getNextStateForShowResults(this),
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
      const answers: Array<number | null> = []

      if (this.currentQuestionIndex !== null) {
        for (let index = 0; index <= this.currentQuestionIndex; index++) {
          answers.push(null)
        }
      }

      this.players.push({
        id,
        name,
        answers,
        focus: true,
      })
    },

    kickPlayer(id: string) {
      const playerIndex = this.players.findIndex(player => player.id === id)

      if (playerIndex === -1) {
        throw new Error('Player not found')
      }

      this.players.splice(playerIndex, 1)

      const peer = usePeerStore()

      peer.send({
        type: MessageType.Admin,
        kick: true,
      })
    },

    setPlayerAnswer(id: string, answer: number | null) {
      const player = this.players.find(player => player.id === id)

      if (!player) {
        throw new Error('Player not found')
      }

      if (this.currentQuestionIndex === null) {
        throw new Error('Current question index is null')
      }

      player.answers[this.currentQuestionIndex] = answer
    },

    getPlayersAnswersByIndex(index: number) {
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

      return this.getPlayersAnswersByIndex(index)
    },

    isCorrectAnswer(questionId: number, answer: number | null) {
      const question = Questions[questionId]

      if (!question) {
        throw new Error('Question not found')
      }

      return question.answerId === answer
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
  },
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useQuizStore, import.meta.hot))
}
