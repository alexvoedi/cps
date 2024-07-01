<script setup lang="ts">
import JSConfetti from 'js-confetti'
import type { DataTableColumns } from 'naive-ui'
import { useQuizStore } from '../store/quiz'
import { calcPoints } from '../utils/calcPoints'

const quiz = useQuizStore()

const data = computed(() => {
  const playerResults: {
    name: string
    correct: number
    wrong: number
    notAnswered: number
    points: number
  }[] = quiz.players.map((player) => {
    const results = quiz.getPlayerResults(player.id)
    const answerArray = quiz.getPlayerAnswerArray(player.id)

    const points = calcPoints(answerArray)

    return {
      points,
      ...player,
      ...results,
    }
  })

  const sorted = playerResults.sort((a, b) => b.points - a.points)

  let rankCounter = 1

  sorted.forEach((player, index) => {
    if (index > 0 && player.points < sorted[index - 1].points) {
      rankCounter++
    }

    if (rankCounter === 1) {
      Object.assign(player, {
        rank: '🥇',
      })
    }
    else if (rankCounter === 2) {
      Object.assign(player, {
        rank: '🥈',
      })
    }
    else if (rankCounter === 3) {
      Object.assign(player, {
        rank: '🥉',
      })
    }
    else {
      Object.assign(player, {
        rank: rankCounter,
      })
    }
  })

  return sorted
})

const columns = reactive<DataTableColumns>([
  {
    title: 'Platz',
    key: 'rank',
    align: 'center',
    className: 'text-lg',
    minWidth: 64,
  },
  {
    title: 'Name',
    key: 'name',
    className: 'text-lg',
    minWidth: 64,
  },
  {
    title: 'Punkte',
    key: 'points',
    align: 'center',
    className: 'text-lg',
    minWidth: 64,
  },
  {
    title() {
      return h('span', {
        class: 'ico-mdi-check text-3xl text-green-6',
      })
    },
    key: 'correct',
    align: 'center',
    className: 'text-lg',
    minWidth: 64,
  },
  {
    title() {
      return h('span', {
        class: 'ico-mdi-close text-3xl text-red-6',
      })
    },
    key: 'wrong',
    align: 'center',
    className: 'text-lg',
    minWidth: 64,
  },
  {
    title() {
      return h('span', {
        class: 'ico-mdi-help text-2xl text-true-gray-4',
      })
    },
    key: 'notAnswered',
    align: 'center',
    className: 'text-lg',
    minWidth: 64,
  },
])

const fanfareSound = new Audio('/cps/quest_complete.ogg')
const theEnd = new Audio('/cps/the-end.mp3')

function finish() {
  fanfareSound.volume = 0.2
  theEnd.volume = 0.2

  fanfareSound.play()

  setTimeout(() => {
    theEnd.play()
  }, 3_800)

  const jsConfetti = new JSConfetti()

  jsConfetti.addConfetti({
    emojis: ['🌈', '⚡️', '💥', '✨', '💫', '🌸'],
    emojiSize: 32,
    confettiNumber: 200,
  })

  setInterval(() => {
    jsConfetti.addConfetti({
      emojis: ['🌈', '⚡️', '💥', '✨', '💫', '🌸', '🎉', '🎊', '🎈', '🎁', '🎀', '🪅', '🎆', '🎇', '🧨', '🎂', '🍰', '🧁', '🍭', '🍬'],
      emojiSize: 32,
      confettiNumber: 10,
    })
  }, 750)
}

onMounted(() => {
  if (quiz.currentQuestionIndex === quiz.questionCount - 1) {
    finish()
  }
})

function toggleSound() {
  if (theEnd.paused) {
    theEnd.play()
  }
  else {
    theEnd.pause()
  }
}

onUnmounted(() => {
  fanfareSound.pause()
  theEnd.pause()
})
</script>

<template>
  <div class="overflow-hidden m-auto">
    <div class="bg-dark-9 bg-opacity-80">
      <h2 class="p-6 text-2xl font-bold flex justify-between">
        <span>Spielstand</span>

        <n-button
          v-if="quiz.currentQuestionIndex === quiz.questionCount - 1"
          circle quaternary
          @click="toggleSound()"
        >
          <template #icon>
            <span class="ico-mdi-volume-off" />
          </template>
        </n-button>
      </h2>

      <n-data-table :columns="columns" :data="data" />
    </div>
  </div>
</template>

<style>

</style>
