import type { QuizState } from '@/enums/QuizState'

export type HostMessage = {
  state: QuizState.LockAnswers
  answerId: number
} | {
  state: QuizState.ShowQuestion
  questionId: number
} | {
  state: QuizState.ShowAnswers
} | {
  state: QuizState.NextQuestion
}
