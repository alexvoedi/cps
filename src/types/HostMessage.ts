import type { MessageType } from '@/enums/MessageType'
import type { QuizState } from '@/enums/QuizState'

type HostQuizMessage = {
  type: MessageType.Quiz
  questionCount: number
  countdownDuration: number
  countdownStart?: string
} & ({
  state: Exclude<QuizState, QuizState.LockAnswers | QuizState.ShowQuestion>
} | {
  state: QuizState.LockAnswers
  answerId: number
} | {
  state: QuizState.ShowQuestion
  currentQuestionId: number
} | {
  state: QuizState.LockAnswers
})

type HostAdminMessage = {
  type: MessageType.Admin
} & ({
  kick: true
})

export type HostMessage = HostQuizMessage | HostAdminMessage
