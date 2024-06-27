import type { QuizState } from '@/enums/QuizState'

export interface ClientMessage {
  state: QuizState.ShowAnswers
  answerId: number
}
