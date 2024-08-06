<script setup lang="ts">
import { darkTheme } from 'naive-ui'
import { useBaseStore } from './store/base'
import { useUserStore } from './store/user'

const baseStore = useBaseStore()
const userStore = useUserStore()

onMounted(async () => {
  await baseStore.checkBackend()
  await userStore.update()
})
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
