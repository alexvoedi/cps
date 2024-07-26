<script setup lang="ts">
import { useBaseStore } from '../store/base'

const baseStore = useBaseStore()
</script>

<template>
  <div class="bg-dark-9 m-auto bg-opacity-80 p-8 overflow-hidden space-y-2">
    <n-form label-placement="left" :show-feedback="false">
      <n-form-item label="Hintergrundvideo">
        <n-switch v-model:value="baseStore.video" />
      </n-form-item>
    </n-form>
  </div>
</template>

<style>

</style>
