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
  <div v-if="showQuestionText" class="p-4 overflow-hidden p-4 m-auto">
    <div class="bg-dark-9 bg-opacity-80">
      <quiz-countdown />

      <div class="p-8 space-y-16">
        <quiz-question-text />

        <quiz-answer-list />
      </div>
    </div>
  </div>
</template>

<style>

</style>
