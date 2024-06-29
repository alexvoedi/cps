<script setup lang="ts">
import Spinner from '@/assets/spinner.svg'
</script>

<template>
  <quiz-card>
    <h2 class="text-center font-bold text-3xl">
      Willkommen beim WoW-Quiz!
    </h2>

    <h3 class="text-xl flex items-center justify-center gap-4 mx-auto">
      <img :src="Spinner">
      <span class="font-light">Bitte warte, bis das Spiel startet...</span>
    </h3>
  </quiz-card>
</template>

<style>

</style>
