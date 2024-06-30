<script setup lang="ts">
const show = ref(false)
</script>

<template>
  <n-button circle quaternary @click="show = true">
    <template #icon>
      <span class="ico-mdi-cog" />
    </template>
  </n-button>

  <n-modal v-model:show="show" class="max-w-800px">
    <n-card closable content-class="p-0!" title="Administration" @close="show = false">
      <quiz-results />
    </n-card>
  </n-modal>
</template>

<style>

</style>
