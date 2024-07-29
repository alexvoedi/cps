<script setup lang="ts">
import type { SelectOption } from 'naive-ui'
import { CharacterRole } from '../enums/CharacterRole'

const value = defineModel({
  type: String,
})

const options = ref<SelectOption[]>([
  {
    label: 'Schaden',
    value: CharacterRole.Damage,
  },
  {
    label: 'Heilung',
    value: CharacterRole.Healer,
  },
  {
    label: 'Tank',
    value: CharacterRole.Tank,
  },
])
</script>

<template>
  <n-select
    v-model:value="value"
    :options="options"
    tag
    multiple
    filterable
    placeholder="Bitte wähle mindestens eine Rolle..."
    clearable
    show-on-focus
  />
</template>

<style>

</style>
