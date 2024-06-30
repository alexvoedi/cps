<script setup lang="ts">
import { useHost } from '../composables/useHost'
import { QuizState } from '../enums/QuizState'
import { useQuizStore } from '../store/quiz'

const quiz = useQuizStore()
const host = useHost()

const showQuestionText = computed(() => [
  QuizState.ShowQuestion,
  QuizState.ShowAnswers,
  QuizState.LockAnswers,
  QuizState.ShowCorrectAnswer,
  QuizState.ShowQuestionResults,
].includes(quiz.state))
</script>

<template>
  <div v-if="showQuestionText" class="p-4 overflow-hidden m-auto">
    <div class="bg-dark-9 bg-opacity-80">
      <quiz-countdown />

      <div class="p-8 space-y-16">
        <quiz-question-text />
        <quiz-answer-list />
      </div>
    </div>
  </div>

  <quiz-card v-else-if="quiz.currentQuestionIndex !== null && quiz.currentQuestion !== null">
    <h2 class="text-4xl text-center font-bold">
      Frage {{ quiz.currentQuestionIndex + (host ? 1 : 2) }}
    </h2>

    <div class="text-center">
      <span class="opacity-80">Kategorie</span>
      <h3 class="text-3xl text-center font-bold">
        {{ quiz.currentQuestion.category }}
      </h3>
    </div>
  </quiz-card>
</template>

<style>

</style>
