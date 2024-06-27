<script setup lang="ts">
import { breakpointsTailwind } from '@vueuse/core'
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
  {
    label: () => h(RouterLink, {
      to: '/quiz',
    }, {
      default: () => 'Quiz',
    }),
    key: '/quiz',
    icon: () => renderIcon('ico-mdi-head-question'),
  },
]

const activeItem = computed(() => route.path)

const breakpoints = useBreakpoints(breakpointsTailwind)

const mobile = ref(breakpoints.smallerOrEqual('md'))
</script>

<template>
  <n-layout-header v-if="mobile">
    <n-menu
      :options="menuOptions"
      :value="activeItem"
      mode="horizontal"
    />
  </n-layout-header>

  <n-layout-sider
    v-else
    class="bg-color"
    bordered
    collapse-mode="width"
    :collapsed-width="64"
    collapsed
  >
    <n-menu
      :options="menuOptions"
      :value="activeItem"
      collapsed
      :collapsed-width="64"
      collapse-mode="width"
    />
  </n-layout-sider>
</template>

<style>

</style>
