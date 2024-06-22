<script setup lang="ts">
import { breakpointsTailwind } from '@vueuse/core'
import type { MenuOption } from 'naive-ui'
import { RouterLink } from 'vue-router'

const route = useRoute()
const breakpoints = useBreakpoints(breakpointsTailwind)

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

const collapsed = ref(breakpoints.isSmallerOrEqual('xl'))
</script>

<template>
  <n-layout-sider
    class="bg-color"
    bordered
    collapse-mode="width"
    :collapsed-width="64"
    :width="240"
    :collapsed="collapsed"
    show-trigger
    @collapse="collapsed = true"
    @expand="collapsed = false"
  >
    <n-menu
      :options="menuOptions"
      :value="activeItem"
      :collapsed="collapsed"
      :collapsed-width="64"
      collapse-mode="width"
    />
  </n-layout-sider>
</template>

<style>

</style>
