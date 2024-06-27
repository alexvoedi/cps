<script setup lang="ts">
import { QuizState } from '../enums/QuizState'
import { useQuizStore } from '../store/quiz'

const quiz = useQuizStore()

const showQuestionText = computed(() => [
  QuizState.ShowQuestion,
  QuizState.ShowAnswers,
  QuizState.LockAnswers,
  QuizState.ShowCorrectAnswer,
  QuizState.ShowQuestionResults,
].includes(quiz.state))
</script>

<template>
  <div
    v-if="quiz.currentQuestion !== null && quiz.currentQuestionIndex !== null"
    :class="{
      'opacity-0 pointer-events-none': !showQuestionText,
    }"
  >
    <span>Frage {{ quiz.currentQuestionIndex + 1 }} / {{ quiz.questionCount }} </span>

    <h2 class="text-center font-bold text-3xl">
      {{ quiz.currentQuestion.question }}
    </h2>
  </div>
</template>

<style>

</style>
