<script setup lang="ts">
import { useBaseStore } from '../store/base'

const emit = defineEmits<{
  (e: 'setName', name: string): void
}>()

const base = useBaseStore()

const name = ref<string>('')

function submit() {
  if (!name.value)
    return
  if (name.value.length < 1)
    return
  if (name.value.length > 32)
    return

  base.setName(name.value)
  emit('setName', name.value)
}
</script>

<template>
  <n-input-group>
    <n-input
      v-model:value="name"
      type="text"
      size="large"
      placeholder="Name"
      maxlength="32"
      minlength="1"
      @keydown.enter="submit()"
    />
    <n-button size="large" type="primary" @click="submit()">
      Speichern
    </n-button>
  </n-input-group>
</template>

<style>

</style>
