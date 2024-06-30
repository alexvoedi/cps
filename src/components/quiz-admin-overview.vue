<script setup lang="ts">
import { type DataTableColumns, NButton } from 'naive-ui'
import { useQuizStore } from '../store/quiz'
import type { QuizPlayer } from '../types/QuizPlayer'
import { usePeerStore } from '../store/peer'

const peer = usePeerStore()
const quiz = useQuizStore()

const data = computed(() => {
  return quiz.players.map((player) => {
    const answered = quiz.currentQuestionIndex !== null ? typeof player.answers[quiz.currentQuestionIndex] === 'number' ? '✔️' : '❌' : '❌'

    return {
      ...player,
      focus: player.focus ? '✔️' : '❌',
      connected: peer.connections.some(connection => player.id === connection.peer)
        ? '✔️'
        : '❌',
      answered,
    }
  })
})

const columns = reactive<DataTableColumns<QuizPlayer>>([
  {
    title: 'Name',
    key: 'name',
  },
  {
    title: 'Verbunden',
    key: 'connected',
    align: 'center',
  },
  {
    title: 'Fokus',
    key: 'focus',
    align: 'center',
  },
  {
    title: 'Geantwortet',
    key: 'answered',
    align: 'center',
  },
  {
    title: 'Kick',
    key: 'kick',
    align: 'center',
    render(row) {
      return h(NButton, {
        size: 'small',
        type: 'error',
        circle: true,
        quaternary: true,
        onClick() {
          quiz.kickPlayer(row.id)
        },
      }, {
        icon: () => h('span', {
          class: 'ico-mdi-delete',
        }),
      })
    },
  },
])
</script>

<template>
  <n-data-table
    :columns="columns"
    :data="data"
    :rounded="false"
    :bordered="false"
    :max-height="240"
    size="small"
    striped
    class="bg-dark-9 bg-opacity-80"
  />
</template>

<style>

</style>
