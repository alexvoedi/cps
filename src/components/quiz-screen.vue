<!-- eslint-disable no-console -->
<script setup lang="ts">
import { usePeerStore } from '../store/peer'
import { useQuizStore } from '../store/quiz'
import { QuizState } from '../enums/QuizState'
import type { PlayerMessage } from '../types/PlayerMessage'
import type { HostMessage } from '../types/HostMessage'

const params = useUrlSearchParams<{
  host?: boolean
}>()
const peer = usePeerStore()
const quiz = useQuizStore()

onMounted(() => {
  if (params.host) {
    quiz.init()
  }

  peer.init(params.host ? onHostData : onPlayerData)
})

function onHostData({ id, data }: PlayerMessage) {
  console.log({ id, data })

  if (data.state !== quiz.state) {
    return
  }

  switch (data.state) {
    case QuizState.Waiting:
      quiz.addPlayer(id, data.name)
      break
    case QuizState.ShowAnswers:
      quiz.setPlayerAnswer(id, data.answerId)
      break
  }
}

function onPlayerData(data: HostMessage) {
  Object.assign(quiz, data)

  switch (data.state) {
    case QuizState.ShowQuestion:
      quiz.setCurrentQuestion(data.currentQuestionId)
      quiz.addQuestionId(data.currentQuestionId)
      break
    case QuizState.ShowAnswers:
      quiz.startCountdown()
      break
    case QuizState.NextQuestion:
      quiz.resetCountdown()
      quiz.resetCurrentAnswer()
      break
  }
}

const showQuestion = computed(() => {
  return ![QuizState.Waiting, QuizState.StartQuiz, QuizState.ShowResults].includes(quiz.state)
})
</script>

<template>
  <quiz-admin v-if="params.host" />

  <Transition name="fade" mode="out-in" appear>
    <quiz-question v-if="showQuestion" />
    <quiz-lounge v-else-if="quiz.state === QuizState.Waiting" />
    <quiz-start v-else-if="quiz.state === QuizState.StartQuiz" />
    <quiz-results v-else-if="quiz.state === QuizState.ShowResults" />
  </Transition>
</template>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
