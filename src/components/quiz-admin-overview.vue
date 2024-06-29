<script setup lang="ts">
import type { DataTableColumns } from 'naive-ui'
import { useQuizStore } from '../store/quiz'

const quiz = useQuizStore()

const data = computed(() => {
  return quiz.players.map((player) => {
    const answered = quiz.currentQuestionIndex !== null ? typeof player.answers[quiz.currentQuestionIndex] === 'number' ? '✔️' : '❌' : '❌'
    return {
      name: player.name,
      focus: player.focus ? '✔️' : '❌',
      answered,
    }
  })
})

const columns = reactive<DataTableColumns>([
  {
    title: 'Name',
    key: 'name',
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
