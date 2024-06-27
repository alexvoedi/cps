<script setup lang="ts">
import { QuizState } from '../enums/QuizState'
import { useQuizStore } from '../store/quiz'

const quiz = useQuizStore()

const now = useNow({
  interval: 100,
})

const remainingCountdown = computed(() => {
  if (!quiz.countdownStart) {
    return 0
  }

  return now.value.getTime() - quiz.countdownStart.getTime()
})

const percentage = computed(() => {
  if (!quiz.countdownStart) {
    return 0
  }

  return Math.min((remainingCountdown.value / 1000) / quiz.countdownDuration, 1)
})

const showProgress = computed(() => [
  QuizState.ShowAnswers,
].includes(quiz.state))
</script>

<template>
  <n-progress
    :percentage="100 - (percentage * 100)"
    :show-indicator="false"
    :height="12"
    :disabled="!showProgress"
    :border-radius="0"
  />
</template>

<style>

</style>
