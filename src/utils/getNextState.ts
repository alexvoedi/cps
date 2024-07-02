import { QuizState } from '@/enums/QuizState'
import type { useQuizStore } from '@/store/quiz'

export function getNextStateForShowQuestionResults(quiz: ReturnType<typeof useQuizStore>) {
  if (quiz.currentQuestionIndex === null) {
    return QuizState.NextQuestion
  }
  else if (quiz.currentQuestionIndex === 0) {
    return QuizState.NextQuestion
  }
  else if (quiz.currentQuestionIndex === quiz.questionCount - 1) {
    return QuizState.EndQuiz
  }
  else if ((quiz.currentQuestionIndex + 1) % 10 === 0) {
    return QuizState.ShowResults
  }
  else {
    return QuizState.NextQuestion
  }
}

export function getNextStateForShowResults(quiz: ReturnType<typeof useQuizStore>) {
  if (quiz.currentQuestionIndex === null) {
    return QuizState.StartQuiz
  }
  else if (quiz.currentQuestionIndex === quiz.questionCount - 1) {
    return QuizState.ShowResults
  }
  else {
    return QuizState.NextQuestion
  }
}
