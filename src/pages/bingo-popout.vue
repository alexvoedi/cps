<script setup lang="ts">
import { useBingo } from '../composables/useBingo'

const { cells, size } = useBingo()
</script>

<template>
  <n-layout class="h-full" content-class="overflow-hidden">
    <div class="flex flex-col h-full">
      <div class="overflow-hidden">
        <bingo-board :cells="cells" :size="Number(size)" />
      </div>
    </div>
  </n-layout>
</template>

<style>

</style>
