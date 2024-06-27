<script setup lang="ts">
import { darkTheme } from 'naive-ui'

useTitle('CPS')
</script>

<template>
  <n-config-provider :theme="darkTheme" abstract>
    <n-message-provider>
      <n-dialog-provider>
        <video autoplay muted loop class="absolute object-cover bottom-0 right-0 min-w-full min-h-full z-1" poster="/bg-image.webp" preload="auto">
          <source src="/bg-video.mp4" type="video/mp4">
        </video>

        <router-view />
      </n-dialog-provider>
    </n-message-provider>
  </n-config-provider>
</template>

<style lang="postcss">
html, body, #app {
  height: 100dvh;
}
</style>
