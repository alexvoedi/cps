<script setup lang="ts">
import type { MenuOption } from 'naive-ui'

const menuOptions: MenuOption[] = [
  {
    label: 'Home',
    key: 'home',
  },
  {
    label: 'Bingo',
    key: 'bingo',
  },
]
</script>

<template>
  <n-menu :options="menuOptions" @update:value="() => {}" />
</template>

<style>

</style>
