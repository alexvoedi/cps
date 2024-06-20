<script setup lang="ts">
import type { MenuOption } from 'naive-ui'
import { RouterLink } from 'vue-router'

const route = useRoute()

function renderIcon(icon: string) {
  return h('span', {
    class: icon,
  })
}

const menuOptions: MenuOption[] = [
  {
    label: () => h(RouterLink, {
      to: '/',
    }, {
      default: () => 'Home',
    }),
    key: '/',
    icon: () => renderIcon('ico-mdi-home'),
  },
  {
    label: () => h(RouterLink, {
      to: '/bingo',
    }, {
      default: () => 'Bingo',
    }),
    key: '/bingo',
    icon: () => renderIcon('ico-ic:baseline-grid-on'),
  },
]

const activeItem = computed(() => route.path)
</script>

<template>
  <n-menu
    :options="menuOptions" :value="activeItem" @update:value="() => {}"
  />
</template>

<style>

</style>
