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

const selectRef = ref<HTMLInputElement | null>(null)

function handleUpdateValue() {
  selectRef.value?.blur()
}
</script>

<template>
  <n-select
    ref="selectRef"
    v-model:value="value"
    :options="options"
    multiple
    filterable
    placeholder="Bitte wähle mindestens eine Rolle..."
    clearable
    show-on-focus
    clear-filter-after-select
    @update:value="handleUpdateValue"
  />
</template>
