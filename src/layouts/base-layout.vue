<script setup lang="ts">
import { breakpointsTailwind } from '@vueuse/core'
import { useMessage } from 'naive-ui'
import { useBaseStore } from '../store/base'
import { useUserStore } from '../store/user'

const breakpoints = useBreakpoints(breakpointsTailwind)
const baseStore = useBaseStore()
const userStore = useUserStore()
const message = useMessage()

const mobile = ref(breakpoints.smallerOrEqual('md'))

watch(() => baseStore.backendHealthy, (newValue, oldValue) => {
  if (newValue === false) {
    message.error('Backend is not available!')
  }
  else if (oldValue === false && newValue === true) {
    message.success('Backend is available!')
  }
}, {
  immediate: true,
})

onMounted(() => {
  baseStore.checkBackend()
  userStore.update()
})

useTitle('CPS')
</script>

<template>
  <n-layout :has-sider="!mobile" class="h-100dvh">
    <the-nav />

    <n-layout
      class="relative" :style="{
        height: mobile ? 'calc(100% - 42px)' : '100%',
      }"
    >
      <n-layout-content :native-scrollbar="false" class="h-full" content-class="relative h-full">
        <div class="relative z-0">
          <video v-if="baseStore.video" autoplay muted loop class="fixed object-cover bottom-0 right-0 top-0 left-0 h-full w-full z-1 overflow-hidden" poster="/bg-image.webp" preload="auto" alt="Background">
            <source src="/bg-video.mp4" type="video/mp4">
          </video>

          <img v-else src="/bg-image.webp" class="fixed object-cover bottom-0 right-0 top-0 left-0 h-full w-full z-1 overflow-hidden" alt="Background">
        </div>

        <div class="absolute top-0 left-0 right-0 bottom-0">
          <router-view />
        </div>
      </n-layout-content>
    </n-layout>
  </n-layout>
</template>

<style>
html, body, #app {
  height: 100dvh;
}
</style>
