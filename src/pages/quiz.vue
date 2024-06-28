<script setup lang="ts">
import { useBaseStore } from '../store/base'

const base = useBaseStore()

const ready = computed(() => !!base.name)
</script>

<template>
  <default-layout>
    <div class="flex flex-col h-full">
      <quiz-screen v-if="ready" />
      <name-card v-else />
    </div>
  </default-layout>
</template>
