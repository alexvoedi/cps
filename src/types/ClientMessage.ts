import type { QuizState } from '@/enums/QuizState'

export interface ClientMessage {
  id: string
  data: {
    state: QuizState.ShowAnswers
    answerId: number
  } | {
    state: QuizState.Waiting
    name: string
  }
}
