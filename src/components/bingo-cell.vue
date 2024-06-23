<script setup lang="ts">
import type { Cell } from '../classes/Cell'

const props = defineProps<{
  cell: Cell
}>()

const classes = computed(() => {
  const { cell } = props

  return {
    'bg-green-800 hover:bg-green-900': cell.isChecked(),
    'hover:bg-true-gray-900': cell.isUnchecked(),
    'bg-red-900': cell.isFailed(),
  }
})
</script>

<template>
  <n-popover trigger="hover" :duration="0" :keep-alive-on-hover="false" :animated="false">
    <template #trigger>
      <button
        class="text font-semibold p-0.5vmin text-center w-full h-full overflow-hidden whitespace-normal break-words space-y-4 transition-all" :class="classes"
        @click="cell.toggleState()"
        @contextmenu.prevent="cell.toggleGoal()"
      >
        <div
          :class="{
            'text-blue-500': cell.goal,
          }"
        >
          {{ cell.data.title }}
        </div>

        <div v-if="cell.data.count" class="flex gap-4 items-center justify-center">
          <n-button tertiary circle :disabled="cell.currentCount === 0" @click.stop="cell.decrementCounter()">
            <template #icon>
              <span class="ico-mdi-minus" />
            </template>
          </n-button>

          <span>{{ cell.currentCount }}</span>

          <n-button tertiary circle :disabled="cell.data.count === cell.currentCount" @click.stop="cell.incrementCounter()">
            <template #icon>
              <span class="ico-mdi-plus" />
            </template>
          </n-button>
        </div>
      </button>
    </template>

    <div class="space-y-4 max-w-640px">
      <div v-if="cell.data.description">
        <h2 class="font-bold">
          Beschreibung
        </h2>

        <p>
          {{ cell.data.description }}
        </p>
      </div>

      <div v-if="cell.data.hints">
        <h2 class="font-bold">
          Hinweise
        </h2>

        <ul class="list-disc pl-6">
          <li v-for="hint in cell.data.hints" :key="hint">
            {{ hint }}
          </li>
        </ul>
      </div>
    </div>
  </n-popover>
</template>

<style>
.text {
  font-size: max(1.75vmin, 14px);
}
</style>
