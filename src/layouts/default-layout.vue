<script setup lang="ts">
import { breakpointsTailwind } from '@vueuse/core'

const breakpoints = useBreakpoints(breakpointsTailwind)

const mobile = ref(breakpoints.smallerOrEqual('md'))
</script>

<template>
  <n-layout :has-sider="!mobile" class="h-100dvh">
    <the-nav />

    <n-layout
      class="relative" :style="{
        height: mobile ? 'calc(100% - 42px)' : '100%',
      }"
    >
      <n-layout-content :native-scrollbar="false" class="h-full" content-class="h-full absolute z-2">
        <slot />
      </n-layout-content>
    </n-layout>
  </n-layout>
</template>

<style>
</style>
