<script setup lang="ts">
import { breakpointsTailwind } from '@vueuse/core'
import type { Cell } from '../../classes/Cell'

const props = defineProps<{
  cell: Cell
}>()

const classes = computed(() => {
  const { cell } = props

  return {
    'bg-green-800 hover:bg-green-900': cell.isChecked(),
    'hover:bg-true-gray-900': cell.isUnchecked(),
    'bg-red-900': cell.isFailed(),

    'text-inherit border-transparent': cell.isLowPriority(),
    'text-blue-400 border-transparent': cell.isMediumPriority(),
    'border-blue-700': cell.isHighPriority(),
  }
})

const hovered = ref(false)

function keydownHandler(event: KeyboardEvent) {
  if (!hovered.value)
    return

  props.cell.handleKeyPress(event)
}

onMounted(() => {
  window.addEventListener('keydown', keydownHandler)
})

onUnmounted(() => {
  window.removeEventListener('keydown', keydownHandler)
})

const breakpoints = useBreakpoints(breakpointsTailwind)

const mobile = ref(breakpoints.smallerOrEqual('lg'))
</script>

<template>
  <n-popover trigger="hover" :duration="0" :keep-alive-on-hover="false" :animated="false" display-directive="show">
    <template #trigger>
      <button
        class="text font-semibold p-0.5vmin text-center w-full h-full overflow-hidden whitespace-normal break-words space-y-2 md:space-y-4 transition-all border border-3 focus-visible:(outline-none)"
        :class="classes"
        @click="cell.toggleState()"
        @mousedown.middle.prevent="cell.reset()"
        @contextmenu.prevent="cell.togglePriority()"
        @mouseenter="hovered = true"
        @mouseleave="hovered = false"
      >
        <div>
          {{ cell.data.title }}
        </div>

        <div v-if="cell.data.count" class="flex gap-2 md:gap-4 items-center justify-center">
          <n-button
            tertiary
            circle
            :disabled="cell.currentCount === 0"
            :size="mobile ? 'tiny' : 'medium'"
            @click.stop="cell.decrementCounter()"
          >
            <template #icon>
              <span class="ico-mdi-minus" />
            </template>
          </n-button>

          <span>{{ cell.currentCount }}</span>

          <n-button
            tertiary
            circle
            :disabled="cell.data.count === cell.currentCount"
            :size="mobile ? 'tiny' : 'medium'"
            @click.stop="cell.incrementCounter()"
          >
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
  font-size: 1.75vmin;
}
</style>
