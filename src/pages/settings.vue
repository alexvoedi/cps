<script setup lang="ts">
import { useBaseStore } from '../store/base'

const baseStore = useBaseStore()
</script>

<template>
  <centered-layout>
    <n-card title="Einstellungen" class="max-w-160">
      <n-form label-placement="left" :show-feedback="false">
        <n-form-item label="Hintergrundvideo">
          <n-switch v-model:value="baseStore.video" />
        </n-form-item>
      </n-form>
    </n-card>
  </centered-layout>
</template>

<style>

</style>
