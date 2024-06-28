<!-- eslint-disable no-console -->
<script setup lang="ts">
import { usePeerStore } from '../store/peer'
import { useQuizStore } from '../store/quiz'
import { QuizState } from '../enums/QuizState'
import type { ClientMessage } from '../types/ClientMessage'
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

  peer.init(params.host ? onHostData : onClientData)
})

function onHostData({ id, data }: ClientMessage) {
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

function onClientData(data: HostMessage) {
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
</script>

<template>
  <div class="p-8 bg-dark-9 bg-opacity-80">
    <div class="mx-auto container flex gap-4 justify-between items-center">
      <h1 class="text-4xl">
        <span>Quiz</span>
      </h1>

      <quiz-admin v-if="params.host" />
    </div>
  </div>

  <quiz-question />
</template>

<style>

</style>
