<script setup lang="ts">
import { useQuizStore } from '../store/quiz'

const show = ref(false)

const quiz = useQuizStore()
</script>

<template>
  <n-button circle quaternary @click="show = true">
    <template #icon>
      <span class="ico-mdi-cog" />
    </template>
  </n-button>

  <n-modal v-model:show="show">
    <n-card>
      <div>
        {{ quiz.results }}
      </div>
    </n-card>
  </n-modal>
</template>

<style>

</style>
