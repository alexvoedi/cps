<script setup lang="ts">
import { darkTheme } from 'naive-ui'

useTitle('CPS')
</script>

<template>
  <n-config-provider
    :theme="darkTheme" abstract
  >
    <n-message-provider>
      <n-dialog-provider>
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
