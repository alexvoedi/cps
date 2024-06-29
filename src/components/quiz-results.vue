<script setup lang="ts">
import type { DataTableColumns } from 'naive-ui'

const data = computed(() => {
  const playerResults: {
    name: string
    correct: number
    wrong: number
  }[] = [
    {
      name: 'Max Mustermann',
      correct: 10,
      wrong: 0,
    },
    {
      name: 'Jobst',
      correct: 8,
      wrong: 2,
    },
    {
      name: 'Erika Mustermann',
      correct: 8,
      wrong: 2,
    },
    {
      name: 'Hans Mustermann',
      correct: 7,
      wrong: 3,
    },
    {
      name: 'Klaus Mustermann',
      correct: 6,
      wrong: 4,
    },
  ]

  const sorted = playerResults.sort((a, b) => b.correct - a.correct)

  let rankCounter = 1

  sorted.forEach((player, index) => {
    if (index > 0 && player.correct < sorted[index - 1].correct) {
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
    title: '✔️',
    key: 'correct',
    align: 'center',
    className: 'text-lg',
    minWidth: 64,
  },
  {
    title: '❌',
    key: 'wrong',
    align: 'center',
    className: 'text-lg',
    minWidth: 64,
  },
])
</script>

<template>
  <div class="overflow-hidden m-auto">
    <div class="bg-dark-9 bg-opacity-80">
      <h2 class="p-6 text-2xl font-bold">
        Spielstand
      </h2>

      <n-data-table :columns="columns" :data="data" />
    </div>
  </div>
</template>

<style>

</style>
