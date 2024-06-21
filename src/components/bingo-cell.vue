<script setup lang="ts">
import type BingoData from '@/data/bingo.json'

defineProps<{
  data: typeof BingoData[0]
  isChecked: boolean
  isGoal: boolean
}>()

const emit = defineEmits<{
  (e: 'toggleChecked'): void
  (e: 'toggleGoal'): void
}>()
</script>

<template>
  <button
    class="text-1.5vmin font-semibold p-0.5vmin text-center w-full h-full overflow-hidden border border-2" :class="{
      'bg-green-800 hover:bg-green-900': isChecked,
      'hover:bg-true-gray-900': !isChecked,
      'border-transparent': !isGoal,
      'border-blue-600': isGoal,
    }"
    @click="emit('toggleChecked')"
    @contextmenu.prevent="emit('toggleGoal')"
  >
    {{ data.title }}
  </button>
</template>

<style>

</style>
