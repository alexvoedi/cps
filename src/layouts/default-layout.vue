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
      <n-layout-content :native-scrollbar="false" class="h-full" content-class="relative h-full ">
        <video autoplay muted loop class="object-cover bottom-0 right-0 min-w-full min-h-full z-1" poster="/bg-image.webp" preload="auto">
          <source src="/bg-video.mp4" type="video/mp4">
        </video>

        <div class="absolute top-0 left-0 right-0 bottom-0">
          <slot />
        </div>
      </n-layout-content>
    </n-layout>
  </n-layout>
</template>

<style>
</style>
