<script setup lang="ts">
import { useDialog } from 'naive-ui'
import { useBingo } from '../../composables/useBingo'

const { cells, size, resetCells, mostRecentVersion, newSeed } = useBingo()

const dialog = useDialog()

function popout() {
  const url = new URL('/bingo/popout', window.location.origin)

  const query = new URLSearchParams(window.location.search)

  window.open(`${url.origin}/cps${url.pathname}?${query}`, 'WoW Bingo', 'width=800,height=800,location=no,scrollbars=no,status=no,titlebar=no,toolbar=no')
}

function reset() {
  dialog.warning({
    title: 'Spieldaten zurücksetzen',
    content: 'Willst du wirklich alle Spieldaten zurücksetzen?',
    onPositiveClick: () => {
      resetCells()
    },
    onNegativeClick: () => {},
    positiveText: 'Jop!',
    negativeText: 'Nee, lieber nicht',

  })
}

function randomize() {
  dialog.warning({
    title: 'Neuer Seed',
    content: 'Willst du wirklich einen neuen Seed generieren?',
    onPositiveClick: () => {
      newSeed()
    },
    onNegativeClick: () => {},
    positiveText: 'Jop!',
    negativeText: 'Nee, lieber nicht',

  })
}
</script>

<template>
  <div class="flex flex-col h-full">
    <div class="p-8 bg-dark-9 bg-opacity-80">
      <div class="mx-auto container flex justify-between items-center">
        <h1 class="text-4xl">
          <span>Bingo</span> <span class="text-xs">v{{ mostRecentVersion }}</span>
        </h1>

        <div>
          <bingo-timer />
        </div>

        <div class="flex gap-4 items-center">
          <n-button tertiary @click="popout()">
            <template #icon>
              <span class="ico-mdi-open-in-new" />
            </template>
            <span>Popout</span>
          </n-button>

          <n-button type="warning" tertiary @click="reset()">
            <template #icon>
              <span class="ico-mdi-delete" />
            </template>
            <span>Zurücksetzen</span>
          </n-button>

          <n-button type="warning" tertiary @click="randomize()">
            <template #icon>
              <span class="ico-mdi-dice" />
            </template>
            <span>Randomize</span>
          </n-button>

          <bingo-help />
        </div>
      </div>
    </div>

    <div class="overflow-hidden p-4 m-auto">
      <bingo-board :cells="cells" :size="Number(size)" />
    </div>
  </div>
</template>

<style>

</style>
