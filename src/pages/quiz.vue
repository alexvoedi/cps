<script setup lang="ts">
import { useMessage } from 'naive-ui'
import { usePeer } from '../composables/usePeer'
import { QuizState, useQuiz } from '../composables/useQuiz'

const {
  quizState,
  currentQuestion,
  currentAnswerId,
  currentQuestionIndex,
  questionCount,
  answersLocked,
  countdownStartTime,
  countdownTime,
  nextState,
  setState,
} = useQuiz()

const message = useMessage()
const now = useNow({
  interval: 100,
})

const diff = computed(() => {
  if (!countdownStartTime.value) {
    return 0
  }

  return now.value.getTime() - countdownStartTime.value.getTime()
})

const percentage = computed(() => {
  if (!countdownStartTime.value) {
    return 0
  }

  return Math.min((diff.value / 1000) / countdownTime.value, 1)
})

const showQuestionText = computed(() => [
  QuizState.LockAnswers,
  QuizState.ShowAnswers,
  QuizState.ShowCorrectAnswer,
  QuizState.ShowQuestion,
  QuizState.ShowQuestionResults,
].includes(quizState.value))

const showAnswerTexts = computed(() => [
  QuizState.ShowAnswers,
  QuizState.LockAnswers,
  QuizState.ShowCorrectAnswer,
  QuizState.ShowQuestionResults,
].includes(quizState.value))

const highlightCorrectAnswer = computed(() => [
  QuizState.ShowCorrectAnswer,
  QuizState.ShowQuestionResults,
].includes(quizState.value))

const showProgress = computed(() => [
  QuizState.ShowAnswers,
].includes(quizState.value))

function onData(data: { state: QuizState }) {
  if (!data) {
    return
  }

  if (typeof data !== 'object') {
    return
  }

  if ('state' in data) {
    setState(data.state)
  }
}

const { connections, isHost, peerId } = usePeer(onData)

function copyLink() {
  const url = new URL('/cps/quiz', window.location.origin)

  const query = new URLSearchParams()

  query.set('hostId', peerId.value)

  url.search = query.toString()

  navigator.clipboard.writeText(url.toString())
  message.info('Link copied to clipboard')
}
</script>

<template>
  <default-layout>
    <div class="flex flex-col h-full">
      <div class="p-8 bg-dark-9 bg-opacity-90">
        <div class="mx-auto container flex justify-between items-center">
          <h1 class="text-4xl">
            <span>Quiz</span>
          </h1>

          <div v-if="isHost">
            <n-button
              @click="copyLink()"
            >
              Copy Link
            </n-button>
          </div>

          <div v-if="isHost" class="flex gap-4 items-center">
            <div>State: {{ quizState }}</div>
            <n-button
              @click="() => {
                nextState()
                connections.forEach(conn => conn.send({ state: quizState }))
              }"
            >
              Next Step
            </n-button>
          </div>
        </div>
      </div>

      <div class="p-4 overflow-hidden p-4 m-auto">
        <div class="bg-dark-9 bg-opacity-90">
          <n-progress
            :percentage="100 - (percentage * 100)"
            :show-indicator="false"
            :height="12"
            :disabled="!showProgress"
            :border-radius="0"
          />
          <div v-if="currentQuestionIndex !== null && currentQuestion" class="p-8 space-y-16">
            <div
              :class="{
                'opacity-0 pointer-events-none': !showQuestionText,
              }"
            >
              <span>Frage {{ currentQuestionIndex + 1 }} / {{ questionCount }} </span>

              <h2 class="text-center font-bold text-3xl">
                {{ currentQuestion.question }}
              </h2>
            </div>

            <div
              class="grid grid-cols-2 gap-4" :class="{
                'opacity-0 pointer-events-none': !showAnswerTexts,
              }"
            >
              <div
                v-for="(answer, answerId) in currentQuestion.answers"
                :key="answerId"
                class="border border-4 border-opacity-60 p-2 rounded-xl"
                :class="{
                  'border-#63e2b7 ': highlightCorrectAnswer && currentQuestion.answerId === answerId,
                  'border-transparent': !highlightCorrectAnswer || highlightCorrectAnswer && currentQuestion.answerId !== answerId,
                }"
              >
                <n-button
                  :type="highlightCorrectAnswer && currentQuestion.answerId !== answerId ? 'error' : 'success'"
                  size="large"
                  :tertiary="answerId !== currentAnswerId"
                  :primary="answerId === currentAnswerId"
                  class="py-8! text-xl! disabled:(opacity-60)!"
                  block
                  :disabled="answersLocked"
                  @click="currentAnswerId = answerId"
                >
                  {{ answer }}
                </n-button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </default-layout>
</template>

<style>

</style>
