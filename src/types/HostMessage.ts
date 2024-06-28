import type { QuizState } from '@/enums/QuizState'

interface BaseHostMessage {
  questionCount: number
  countdownDuration: number
}

export type HostMessage = BaseHostMessage & ({
  state: Exclude<QuizState, QuizState.LockAnswers | QuizState.ShowQuestion>
} | {
  state: QuizState.LockAnswers
  answerId: number
} | {
  state: QuizState.ShowQuestion
  currentQuestionId: number
})
