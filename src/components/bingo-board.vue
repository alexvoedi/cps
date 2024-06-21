<script setup lang="ts">
import { useMessage } from 'naive-ui'
import ConfettiExplosion from 'vue-confetti-explosion'
import BingoData from '@/data/bingo.json'

const props = defineProps<{
  boardSize: number
}>()

const message = useMessage()

const checkedIndices = ref<number[]>([])
const goalIndices = ref<number[]>([])

const indices = computed(() => getRandomIndices(props.boardSize ** 2))

function getRandomIndices(count: number) {
  const indices = new Set<number>()
  while (indices.size < count)
    indices.add(Math.floor(Math.random() * BingoData.length))

  return Array.from(indices)
}

const isCheckedIndex = (index: number) => checkedIndices.value.includes(index)
const isGoalIndex = (index: number) => goalIndices.value.includes(index)

function toggleCheckedIndex(index: number) {
  if (checkedIndices.value.includes(index))
    checkedIndices.value = checkedIndices.value.filter(i => i !== index)
  else
    checkedIndices.value = [...checkedIndices.value, index]

  checkForBingo()
}

function toggleGoalIndex(index: number) {
  if (goalIndices.value.includes(index))
    goalIndices.value = goalIndices.value.filter(i => i !== index)
  else
    goalIndices.value = [...goalIndices.value, index]
}

function checkForBingo() {
  const { boardSize } = props

  const rows = Array.from({ length: boardSize }, (_, i) => indices.value.slice(i
    * boardSize, (i + 1) * boardSize))

  const cols = Array.from({ length: boardSize }, (_, i) => indices.value.filter((_, j) => j % boardSize === i))

  const diagonals = [
    indices.value.filter((_, i) => i % (boardSize + 1) === 0),
    indices.value.filter((_, i) => i % (boardSize - 1) === 0 && i > 0 && i < boardSize ** 2 - 1),
  ]

  const lines = [...rows, ...cols, ...diagonals]

  for (const line of lines) {
    if (line.every(i => checkedIndices.value.includes(i)))
      message.success('Bingo!')
  }
}

function getIndex(row: number, col: number) {
  return row * props.boardSize + col
}
</script>

<template>
  <div class="h-full mx-auto aspect-ratio-1/1">
    <div v-for="row in boardSize" :key="row" class="grid" :class="[`grid-cols-${boardSize}`]">
      <div v-for="col in boardSize" :key="col" class="border border-true-gray-700 bg-black bg-opacity-50 aspect-ratio-1/1 flex">
        <bingo-cell
          :is-checked="isCheckedIndex(getIndex(row - 1, col - 1))"
          :is-goal="isGoalIndex(getIndex(row - 1, col - 1))"
          :data="BingoData[getIndex(row - 1, col - 1)]"
          @toggle-checked="toggleCheckedIndex(getIndex(row - 1, col - 1))"
          @toggle-goal="toggleGoalIndex(getIndex(row - 1, col - 1))"
        />
      </div>
    </div>
  </div>
</template>

<style>

</style>
