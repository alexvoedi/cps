<script setup lang="ts">
import { MessageType } from '../enums/MessageType'
import { QuizState } from '../enums/QuizState'
import { useBaseStore } from '../store/base'
import { usePeerStore } from '../store/peer'
import { useQuizStore } from '../store/quiz'
import type { HostMessage } from '../types/HostMessage'
import type { PlayerMessage } from '../types/PlayerMessage'

const base = useBaseStore()
const peer = usePeerStore()
const quiz = useQuizStore()

const params = useUrlSearchParams<{
  host?: boolean
}>()

const ready = computed(() => !!base.name)

if (!params.host) {
  const focus = useWindowFocus()

  watch(focus, () => {
    peer.send({
      type: MessageType.Admin,
      focus: focus.value,
    })
  })
}

peer.init(params.host ? onHostData : onPlayerData)

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
</script>

<template>
  <default-layout>
    <div class="flex flex-col h-full overflow-hidden">
      <quiz-screen v-if="ready" />
      <name-card v-else />
    </div>
  </default-layout>
</template>
