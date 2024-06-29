<script setup lang="ts">
import { QuizState } from '../enums/QuizState'
import { useQuizStore } from '../store/quiz'

const quiz = useQuizStore()

const now = useNow({
  interval: 100,
})

const remainingCountdown = computed(() => {
  if (!quiz.countdownStart || !quiz.countdown) {
    return 0
  }

  return now.value.getTime() - quiz.countdownStart.getTime()
})

const percentage = computed(() => {
  if (!quiz.countdownStart || !quiz.countdown) {
    return 0
  }

  return Math.min((remainingCountdown.value / 1000) / quiz.countdownDuration, 1)
})

const showProgress = computed(() => [
  QuizState.ShowAnswers,
].includes(quiz.state))

let lastSecondPlayed = 0

watch(remainingCountdown, (newValue) => {
  const remainingSeconds = Math.ceil((quiz.countdownDuration * 1000 - newValue) / 1000)
  if (remainingSeconds === 3 && lastSecondPlayed !== 3) {
    const sound = new Audio('/cps/3.ogg')
    sound.volume = 0.5
    sound.play()
    lastSecondPlayed = 3
  }
  else if (remainingSeconds === 2 && lastSecondPlayed !== 2) {
    const sound = new Audio('/cps/2.ogg')
    sound.volume = 0.5
    sound.play()
    lastSecondPlayed = 2
  }
  else if (remainingSeconds === 1 && lastSecondPlayed !== 1) {
    const sound = new Audio('/cps/1.ogg')
    sound.volume = 0.5
    sound.play()
    lastSecondPlayed = 1
  }
  else if (remainingSeconds === 0 && lastSecondPlayed !== 0) {
    const sound = new Audio('/cps/horn.ogg')
    sound.volume = 0.3
    sound.play()
    lastSecondPlayed = 0
  }
})
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
