<script setup lang="ts">
import { QuizState } from '../../enums/QuizState'
import { useQuizStore } from '../../store/quiz'

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
  <div v-if="showQuestionText" class="md:p-4 overflow-hidden m-auto min-w-360px md:min-w-480px max-w-1200px">
    <div class="bg-dark-9 bg-opacity-80">
      <quiz-countdown />

      <div class="p-8 space-y-16">
        <quiz-question-text />
        <quiz-answer-list />
      </div>
    </div>
  </div>

  <quiz-card v-else-if="quiz.currentQuestionIndex !== null && quiz.currentQuestion !== null">
    <h2 v-if="quiz.currentQuestionIndex < quiz.questionCount - 1" class="text-4xl text-center font-bold">
      Frage {{ quiz.currentQuestionIndex + 1 }}
    </h2>

    <h2 v-else class="text-4xl text-center font-bold">
      Letzte Frage!
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
