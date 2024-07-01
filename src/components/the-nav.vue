<script setup lang="ts">
import type { MenuOption } from 'naive-ui'
import { RouterLink } from 'vue-router'
import { useMobile } from '../composables/useMobile'

const route = useRoute()
const mobile = useMobile()

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
  {
    label: () => h(RouterLink, {
      to: '/quiz',
    }, {
      default: () => 'Quiz',
    }),
    key: '/quiz',
    icon: () => renderIcon('ico-mdi-head-question'),
  },
  {
    label: () => h(RouterLink, {
      to: '/settings',
    }, {
      default: () => 'Einstellungen',
    }),
    key: '/settings',
    icon: () => renderIcon('ico-mdi-cog'),
  },
]

const activeItem = computed(() => route.path)
</script>

<template>
  <n-layout-header v-if="mobile">
    <n-menu
      :options="menuOptions"
      :value="activeItem"
      mode="horizontal"
      responsive
    />
  </n-layout-header>

  <n-layout-sider
    v-else
    :collapsed-width="64"
    class="bg-color"
    bordered
    collapse-mode="width"
    collapsed
  >
    <n-menu
      :options="menuOptions"
      :value="activeItem"
      :collapsed-width="64"
      collapsed
      collapse-mode="width"
    />
  </n-layout-sider>
</template>

<style>

</style>
