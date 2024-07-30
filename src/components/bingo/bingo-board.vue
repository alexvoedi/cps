<script setup lang="ts">
import type { Cell } from '../../classes/Cell'

const props = defineProps<{
  cells: Cell[]
  size: number
}>()

function getCell(row: number, col: number) {
  return props.cells[row * props.size + col]
}
</script>

<template>
  <div class="h-full mx-auto aspect-ratio-1/1">
    <div v-for="row in size" :key="row" class="grid" :class="[`grid-cols-${size}`]">
      <div v-for="col in size" :key="col" class="border border-true-gray-700 bg-dark-9 bg-opacity-90 aspect-ratio-1/1 flex">
        <bingo-cell
          :cell="getCell(row - 1, col - 1)"
        />
      </div>
    </div>
  </div>
</template>

<style>
</style>
