<script setup lang="ts">
import { darkTheme } from 'naive-ui'
</script>

<template>
  <n-config-provider
    :theme="darkTheme" abstract
  >
    <n-message-provider>
      <n-dialog-provider>
        <base-layout />
      </n-dialog-provider>
    </n-message-provider>
  </n-config-provider>
</template>

<style>
html, body, #app {
  height: 100dvh;
}
</style>
