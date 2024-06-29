<script setup lang="ts">
import { usePeerStore } from '../store/peer'
import { useQuizStore } from '../store/quiz'
import { QuizState } from '../enums/QuizState'
import { MessageType } from '../enums/MessageType'
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
  switch (data.type) {
    case MessageType.Admin: {
      const player = quiz.players.find(player => player.id === id)

      if (player) {
        player.focus = data.focus
      }

      break
    }
    case MessageType.Quiz: {
      if (data.state !== quiz.state)
        return

      switch (data.state) {
        case QuizState.Waiting: {
          quiz.addPlayer(id, data.name)
          break
        }
        case QuizState.ShowAnswers: {
          quiz.setPlayerAnswer(id, data.answerId)
          break
        }
      }

      break
    }
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
    case QuizState.LockAnswers:
      quiz.resetCountdown()
      break
  }
}

const showQuestion = computed(() => {
  return ![QuizState.Waiting, QuizState.StartQuiz, QuizState.ShowResults, QuizState.EndQuiz].includes(quiz.state)
})
</script>

<template>
  <quiz-admin v-if="params.host" />

  <Transition name="fade" mode="out-in" appear>
    <quiz-question v-if="showQuestion" />
    <quiz-lounge v-else-if="quiz.state === QuizState.Waiting" />
    <quiz-rules v-else-if="quiz.state === QuizState.StartQuiz" />
    <quiz-results v-else-if="quiz.state === QuizState.ShowResults" />
    <quiz-end v-else-if="quiz.state === QuizState.EndQuiz" />
  </Transition>

  <quiz-admin-overview v-if="params.host" />
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
