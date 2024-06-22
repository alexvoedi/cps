<script setup lang="ts">
import type { Cell } from '../classes/Cell'

defineProps<{
  cell: Cell
}>()
</script>

<template>
  <n-popover trigger="hover">
    <template #trigger>
      <button
        class="text font-semibold p-0.5vmin text-center w-full h-full overflow-hidden border border-2 whitespace-normal overflow-hidden break-words space-y-4 transition-all" :class="{
          'bg-green-800 hover:bg-green-900': cell.isChecked(),
          'hover:bg-true-gray-900': cell.isUnchecked(),
          'bg-red-900': cell.isFailed(),
          'border-transparent': !cell.goal,
          'border-blue-600': cell.goal,
        }"
        @click="cell.toggleState()"
        @contextmenu.prevent="cell.toggleGoal()"
      >
        <div>{{ cell.data.title }}</div>

        <div v-if="cell.data.counter" class="flex gap-4 items-center justify-center">
          <n-button quaternary circle @click.stop="cell.decrementCounter()">
            <template #icon>
              <span class="ico-mdi-minus" />
            </template>
          </n-button>

          <span>{{ cell.counter }}</span>

          <n-button quaternary circle @click.stop="cell.incrementCounter()">
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
          <li v-for="requirement in cell.data.hints" :key="requirement">
            {{ requirement }}
          </li>
        </ul>
      </div>
    </div>
  </n-popover>
</template>

<style>
.text {
  font-size: max(1.5vmin, 14px);
}
</style>
