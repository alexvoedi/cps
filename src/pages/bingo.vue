<script setup lang="ts">
import seedrandom from 'seedrandom'
import { useMessage } from 'naive-ui'
import ConfettiExplosion from 'vue-confetti-explosion'
import BingoData from '@/data/bingo.json'

const message = useMessage()
const route = useRoute()
const router = useRouter()

const boardSize = ref(3)

const checkedIndices = ref<number[]>([])
const goalIndices = ref<number[]>([])

function getRandomSeed() {
  return Array.from({ length: boardSize.value }, () => Math.floor(Math.random() * 10)).join('')
}

if (route.query.seed) {
  seedrandom(route.query.seed.toString(), { global: true })
}
else {
  const seed = getRandomSeed()
  seedrandom(seed, { global: true })
  router.push({ query: { seed } })
}

function getRandomIndices(count: number) {
  const indices = new Set<number>()
  while (indices.size < count)
    indices.add(Math.floor(Math.random() * BingoData.length))

  return Array.from(indices)
}

const indices = computed(() => getRandomIndices(boardSize.value ** 2))

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
  const rows = Array.from({ length: boardSize.value }, (_, i) => indices.value.slice(i * boardSize.value, (i + 1) * boardSize.value))

  const cols = Array.from({ length: boardSize.value }, (_, i) => indices.value.filter((_, j) => j % boardSize.value === i))

  const diagonals = [
    indices.value.filter((_, i) => i % (boardSize.value + 1) === 0),
    indices.value.filter((_, i) => i % (boardSize.value - 1) === 0 && i > 0 && i < boardSize.value ** 2 - 1),
  ]

  const lines = [...rows, ...cols, ...diagonals]

  for (const line of lines) {
    if (line.every(i => checkedIndices.value.includes(i)))
      message.success('Bingo!')
  }
}
</script>

<template>
  <div>
    <h1>Bingo</h1>

    <div>
      <button @click="boardSize--">
        -
      </button>
      <span>{{ boardSize }}</span>
      <button @click="boardSize++">
        +
      </button>
    </div>

    <div class="flex">
      <div class="grid mx-auto" :class="[`grid-cols-${boardSize}`]">
        <div v-for="index in indices" :key="index" class="max-w-240px border border-true-gray-700 bg-black bg-opacity-50 aspect-ratio-1/1">
          <button
            class="text-2xl p-4 text-center w-full h-full" :class="{
              'bg-green-800': isCheckedIndex(index),
              'border border-2 border-blue-600': isGoalIndex(index),
            }"
            @click="toggleCheckedIndex(index)"
            @contextmenu.prevent="toggleGoalIndex(index)"
          >
            {{
              BingoData[
                index
              ].title
            }}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style>

</style>
