<script setup lang="ts">
const emit = defineEmits<{
  (e: 'setName', name: string): void
}>()
</script>

<template>
  <div class=" bg-dark-9 bg-opacity-80 p-12 overflow-hidden m-auto space-y-8">
    <h1 class="text-4xl">
      Willkommen zum Quiz!
    </h1>

    <p>
      Bitte gib deinen Namen ein, um am Quiz teilzunehmen.
    </p>

    <name-input @set-name="(name) => emit('setName', name)" />
  </div>
</template>

<style>

</style>
