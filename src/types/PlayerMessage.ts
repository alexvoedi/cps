import type { MessageType } from '@/enums/MessageType'
import type { QuizState } from '@/enums/QuizState'

export type PlayerQuizMessage = {
  type: MessageType.Quiz
} & ({
  state: QuizState.ShowAnswers
  answerId: number
} | {
  state: QuizState.Waiting
  name: string
})

export type PlayerAdminMessage = {
  type: MessageType.Admin
} & ({
  focus: boolean
} | {
  name: string
})

export interface PlayerMessage {
  id: string
  data: PlayerQuizMessage | PlayerAdminMessage
}
