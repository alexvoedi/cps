import type { QuizState } from '@/enums/QuizState'

export interface PlayerMessage {
  id: string
  data: {
    state: QuizState.ShowAnswers
    answerId: number
  } | {
    state: QuizState.Waiting
    name: string
  }
}
