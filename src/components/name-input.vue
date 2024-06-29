<script setup lang="ts">
import { useBaseStore } from '../store/base'

const base = useBaseStore()

const name = ref<string>('')
</script>

<template>
  <n-input-group>
    <n-input
      v-model:value="name"
      type="text"
      size="large"
      placeholder="Name"
      maxlength="32"
      minlength="3"
      @keydown.enter="base.setName(name)"
    />
    <n-button size="large" type="primary" @click="base.setName(name)">
      Speichern
    </n-button>
  </n-input-group>
</template>

<style>

</style>
