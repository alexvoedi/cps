<script setup lang="ts">
import { useQuizStore } from '../../store/quiz'
import { QuizState } from '../../enums/QuizState'
import { useHost } from '../../composables/useHost'

const quiz = useQuizStore()
const host = useHost()

onMounted(() => {
  if (host.value) {
    quiz.init()
  }
})

const showQuestion = computed(() => {
  return ![QuizState.Waiting, QuizState.StartQuiz, QuizState.ShowResults, QuizState.EndQuiz].includes(quiz.state)
})
</script>

<template>
  <quiz-admin v-if="host" />

  <Transition name="fade" mode="out-in" appear>
    <quiz-question v-if="showQuestion" />
    <quiz-lounge v-else-if="quiz.state === QuizState.Waiting" />
    <quiz-rules v-else-if="quiz.state === QuizState.StartQuiz" />
    <quiz-results v-else-if="quiz.state === QuizState.ShowResults" />
    <quiz-end v-else-if="quiz.state === QuizState.EndQuiz" />
  </Transition>

  <quiz-admin-overview v-if="host" />
</template>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
