<!-- eslint-disable no-console -->
<script setup lang="ts">
import { useMessage } from 'naive-ui'
import { usePeerStore } from '../store/peer'
import { useQuizStore } from '../store/quiz'
import { QuizState } from '../enums/QuizState'
import type { ClientMessage } from '../types/ClientMessage'
import type { HostMessage } from '../types/HostMessage'
import { copyLink } from '@/utils/copyLink'

const message = useMessage()
const params = useUrlSearchParams<{
  host?: boolean
  id?: string
}>()
const peer = usePeerStore()
const quiz = useQuizStore()

onMounted(() => {
  quiz.init()
  peer.init(params.host ? onHostData : onClientData)
})

function onHostData(data: ClientMessage) {
  switch (quiz.state) {
    case QuizState.ShowAnswers:
      console.log('got answer from client', data.answerId)
      break
  }
}

function onClientData(data: HostMessage) {
  Object.assign(quiz, data)

  switch (data.state) {
    case QuizState.ShowAnswers:
      quiz.startCountdown()
      break
    case QuizState.NextQuestion:
      quiz.resetCurrentAnswer()
      break
  }
}

if (params.host) {
  watch(() => quiz.state, () => {
    const { state, currentQuestionId } = quiz

    const serializedState = {
      state,
      currentQuestionId,
    }

    peer.send(serializedState)
  })
}

function copyGameUrl() {
  if (params.id) {
    copyLink(params.id)
    message.info('Link copied to clipboard')
  }
}
</script>

<template>
  <default-layout>
    <div class="flex flex-col h-full">
      <div class="p-8 bg-dark-9 bg-opacity-80">
        <div class="mx-auto container flex justify-between items-center">
          <h1 class="text-4xl">
            <span>Quiz</span>
          </h1>

          <template v-if="params.host">
            <div>
              <n-button
                @click="copyGameUrl()"
              >
                Copy Link
              </n-button>
            </div>

            <div class="flex gap-4 items-center">
              <div>State: {{ quiz.state }}</div>
              <n-button
                @click="quiz.nextState()"
              >
                Next Step
              </n-button>
            </div>
          </template>
        </div>
      </div>

      <quiz-question />
    </div>
  </default-layout>
</template>
