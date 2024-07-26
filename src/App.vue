<script setup lang="ts">
import { breakpointsTailwind } from '@vueuse/core'
import { darkTheme } from 'naive-ui'
import { useBaseStore } from './store/base'
import { useUserStore } from './store/user'

const breakpoints = useBreakpoints(breakpointsTailwind)
const baseStore = useBaseStore()
const userStore = useUserStore()

const mobile = ref(breakpoints.smallerOrEqual('md'))

onMounted(() => {
  userStore.update()
})

useTitle('CPS')
</script>

<template>
  <n-config-provider
    :theme="darkTheme" abstract
  >
    <n-message-provider>
      <n-dialog-provider>
        <n-layout :has-sider="!mobile" class="h-100dvh">
          <the-nav />

          <n-layout
            class="relative" :style="{
              height: mobile ? 'calc(100% - 42px)' : '100%',
            }"
          >
            <n-layout-content :native-scrollbar="false" class="h-full" content-class="relative h-full">
              <video v-if="baseStore.video" autoplay muted loop class="object-cover bottom-0 right-0 top-0 left-0 h-full w-full z-1 overflow-hidden" poster="/bg-image.webp" preload="auto">
                <source src="/bg-video.mp4" type="video/mp4">
              </video>

              <img v-else src="/bg-image.webp" class="object-cover bottom-0 right-0 top-0 left-0 h-full w-full z-1 overflow-hidden">

              <div class="absolute top-0 left-0 right-0 bottom-0">
                <router-view />
              </div>
            </n-layout-content>
          </n-layout>
        </n-layout>
      </n-dialog-provider>
    </n-message-provider>
  </n-config-provider>
</template>

<style>
html, body, #app {
  height: 100dvh;
}
</style>
