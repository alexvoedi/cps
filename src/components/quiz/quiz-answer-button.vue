<script setup lang="ts">
import { useHost } from '../../composables/useHost'
import { MessageType } from '../../enums/MessageType'
import { QuizState } from '../../enums/QuizState'
import { usePeerStore } from '../../store/peer'
import { useQuizStore } from '../../store/quiz'

const props = defineProps<{
  text: string
  answerId: number
}>()

const quiz = useQuizStore()
const peer = usePeerStore()

const host = useHost()

const highlightCorrectAnswer = computed(() => [
  QuizState.ShowCorrectAnswer,
  QuizState.ShowQuestionResults,
].includes(quiz.state))

const selected = computed(() => {
  return quiz.currentAnswerId === props.answerId && !host.value
})

const answerCorrect = computed(() => {
  return props.answerId === quiz.currentQuestion?.answerId
})

const buttonType = computed(() => {
  if (highlightCorrectAnswer.value) {
    if (answerCorrect.value) {
      return 'success'
    }
    else {
      return 'error'
    }
  }
  else {
    return 'primary'
  }
})

function toggleAnswer() {
  quiz.setCurrentAnswer(quiz.currentAnswerId === props.answerId ? null : props.answerId)

  if (!host.value) {
    peer.send({
      type: MessageType.Quiz,
      state: quiz.state,
      answerId: quiz.currentAnswerId,
    })
  }
}

function countAnswers() {
  return quiz.players.reduce((acc, player) => {
    if (quiz.currentQuestionIndex === null) {
      return acc
    }

    if (player.answers[quiz.currentQuestionIndex] === props.answerId) {
      return acc + 1
    }
    return acc
  }, 0)
}

function countPlayers() {
  return quiz.players.length
}

const percentage = computed(() => {
  const answers = countAnswers()
  const players = countPlayers()

  if (players === 0) {
    return 0
  }

  return answers / players
})

const percentageString = computed(() => {
  return `${Math.trunc(percentage.value * 100)}%`
})
</script>

<template>
  <n-button
    :type="buttonType"
    :tertiary="!selected"
    :primary="selected"
    class="px-6! py-5! text-xl! text-wrap! h-full!"
    :class="{
      'disabled:(opacity-75)!': quiz.state !== QuizState.ShowAnswers && quiz.state !== QuizState.LockAnswers || host,
      'percentage': quiz.state === QuizState.ShowQuestionResults,
    }"
    :disabled="quiz.state !== QuizState.ShowAnswers || host"
    block
    @click="toggleAnswer()"
  >
    {{ text }}

    <n-tooltip v-if="quiz.state === QuizState.ShowQuestionResults || host" class="max-w-480px">
      <template #trigger>
        <span
          class="absolute left-1 bottom-1 text-xs decoration-underline decoration-dotted decoration-offset-2s"
        >{{ percentageString }}</span>
      </template>

      <span>{{ countAnswers() }} von {{ countPlayers() }} Spielern wählten "{{ text }}"</span>
    </n-tooltip>
  </n-button>
</template>

<style>
.percentage {
  color: white !important;
}
.percentage::after {
  --percentage: v-bind('percentageString');
  --color: rgb(0, 0, 0);

  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(to right,
    var(--color) 0%,
    var(--color) var(--percentage),
    transparent var(--percentage),
    transparent 100%
  );
  pointer-events: none;
  z-index: -1;
}
</style>
