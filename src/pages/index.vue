<script setup lang="ts">
import { useRouter } from 'vue-router'

const router = useRouter()
</script>

<template>
  <default-layout>
    <n-card>
      <div class="flex flex-col items-center justify-center h-full space-y-4">
        <n-button @click="router.push('/bingo')">
          Bingo
        </n-button>
      </div>
    </n-card>
  </default-layout>
</template>

<style>
</style>
