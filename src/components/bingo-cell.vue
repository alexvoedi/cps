<script setup lang="ts">
import type { Cell } from '../classes/Cell'

defineProps<{
  cell: Cell
}>()
</script>

<template>
  <button
    class="text font-semibold p-0.5vmin text-center w-full h-full overflow-hidden border border-2 whitespace-normal overflow-hidden break-words" :class="{
      'bg-green-800 hover:bg-green-900': cell.isChecked(),
      'hover:bg-true-gray-900': cell.isUnchecked(),
      'bg-red-900': cell.isFailed(),
      'border-transparent': !cell.goal,
      'border-blue-600': cell.goal,
    }"
    @click="cell.toggleState()"
    @contextmenu.prevent="cell.toggleGoal()"
  >
    {{ cell.title }}
  </button>
</template>

<style>
.text {
  font-size: max(1.5vmin, 14px);
}
</style>
