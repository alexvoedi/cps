<script setup lang="ts">
import { darkTheme } from 'naive-ui'
</script>

<template>
  <n-config-provider :theme="darkTheme" abstract>
    <n-message-provider>
      <n-layout has-sider class="h-100dvh">
        <n-layout-sider class="bg-color">
          <the-nav />
        </n-layout-sider>
        <n-layout class="bg-image p-16">
          <n-layout-header />

          <n-layout-content class="bg-color">
            <router-view />
          </n-layout-content>
        </n-layout>
      </n-layout>
    </n-message-provider>
  </n-config-provider>
</template>

<style lang="postcss">
html, body, #app {
  height: 100dvh;
}

.bg-image {
  background-image: url('/bg-image.webp');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}

.bg-color {
  height: 100%;
  background-color: rgba(16, 16, 20, 0.75);
}
</style>
