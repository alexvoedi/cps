<script setup lang="ts">
import type { SelectOption } from 'naive-ui'
import { UserRole } from '@/enums/UserRole'

defineProps<{
  disabled?: boolean
}>()

const value = defineModel({
  type: String,
})

const options = ref<SelectOption[]>(
  Object.entries(UserRole).map(([key, value]) => ({
    label: key,
    value,
  })),
)
</script>

<template>
  <n-select
    v-model:value="value"
    :options="options"
    :disabled="disabled"
    filterable
    placeholder="Bitte wähle eine Benutzerrolle..."
    clearable
    show-on-focus
  />
</template>

<style>

</style>
