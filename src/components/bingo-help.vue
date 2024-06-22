<script setup lang="ts">
const show = ref(false)
</script>

<template>
  <n-button tertiary circle @click="show = true">
    <template #icon>
      <span class="ico-mdi-help" />
    </template>
  </n-button>

  <n-modal v-model:show="show">
    <n-card title="Bingo" class="max-w-900px" closable @close="show = false">
      <template #header-extra />

      <div class="space-y-4">
        <p>
          Ziel ist es, eine Reihe, Spalte oder Diagonale zu füllen.
        </p>

        <p>
          Mit der linken Maustaste kann ein Feld als <strong class="text-green-700">erledigt</strong> oder <strong class="text-red-700">fehlgeschlagen</strong> markiert werden. Mit der rechten Maustaste können <strong class="text-blue-600">persönliche Ziele</strong> markiert werden.
        </p>
      </div>

      <template #footer />
    </n-card>
  </n-modal>
</template>

<style>

</style>
