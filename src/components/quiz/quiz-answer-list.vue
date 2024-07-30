<script setup lang="ts">
import { QuizState } from '../../enums/QuizState'
import { useQuizStore } from '../../store/quiz'

const quiz = useQuizStore()

const showAnswerTexts = computed(() => [
  QuizState.ShowAnswers,
  QuizState.LockAnswers,
  QuizState.ShowCorrectAnswer,
  QuizState.ShowQuestionResults,
].includes(quiz.state))

const highlightCorrectAnswer = computed(() => [
  QuizState.ShowCorrectAnswer,
  QuizState.ShowQuestionResults,
].includes(quiz.state))
</script>

<template>
  <div
    v-if="quiz.currentQuestion !== null"
    class="grid grid-cols-1 lg:grid-cols-2 gap-4" :class="{
      'opacity-0 pointer-events-none': !showAnswerTexts,
    }"
  >
    <div
      v-for="(answer, answerId) in quiz.currentQuestion?.answers"
      :key="answerId"
      class="border border-4 border-opacity-60 p-2 rounded-xl"
      :class="{
        'border-#63e2b7 ': highlightCorrectAnswer && quiz.currentQuestion.answerId === answerId,
        'border-transparent': !highlightCorrectAnswer || highlightCorrectAnswer && quiz.currentQuestion.answerId !== answerId,
      }"
    >
      <quiz-answer-button
        :answer-id="answerId"
        :text="answer"
      />
    </div>
  </div>
</template>

<style>

</style>
