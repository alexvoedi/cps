<script setup lang="ts">
import { useDialog } from 'naive-ui'
import { useTimer } from '../../composables/useTimer'

const {
  formattedTime,
  running,
  startTimer,
  stopTimer,
  resetTimer,
} = useTimer()

const dialog = useDialog()

function reset() {
  dialog.warning({
    title: 'Timer zurücksetzen',
    content: 'Willst du wirklich den Timer zurücksetzen?',
    onPositiveClick: () => {
      resetTimer()
    },
    onNegativeClick: () => {},
    positiveText: 'Ja!',
    negativeText: 'Nein, lieber nicht',

  })
}
</script>

<template>
  <div class="flex items-center justify-center gap-4">
    <n-button
      type="warning"
      circle
      quaternary
      @click="reset()"
    >
      <template #icon>
        <span class="ico-mdi-replay" />
      </template>
    </n-button>

    <div class="font-mono text-xl">
      {{ formattedTime }}
    </div>

    <n-button v-if="running" secondary type="success" circle @click="stopTimer()">
      <template #icon>
        <span class="ico-mdi-pause" />
      </template>
    </n-button>
    <n-button v-else tertiary circle @click="startTimer()">
      <template #icon>
        <span class="ico-mdi-play" />
      </template>
    </n-button>
  </div>
</template>
