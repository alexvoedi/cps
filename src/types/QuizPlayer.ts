export interface QuizPlayer {
  id: string
  name: string
  answers: Array<number | null>
  focus: boolean
}
