<script setup lang="ts">
import { darkTheme } from 'naive-ui'
</script>

<template>
  <n-config-provider :theme="darkTheme" abstract>
    <n-message-provider>
      <router-view />
    </n-message-provider>
  </n-config-provider>
</template>

<style lang="postcss">
html, body, #app {
  height: 100dvh;
}
</style>
