<script setup lang="ts">

</script>

<template>
  <n-layout has-sider class="h-100dvh">
    <n-layout-sider class="bg-color">
      <the-nav />
    </n-layout-sider>
    <n-layout class="bg-image p-12">
      <n-layout-header />

      <n-layout-content :native-scrollbar="false" class="h-full" content-class="h-full">
        <slot />
      </n-layout-content>
    </n-layout>
  </n-layout>
</template>

<style>
.bg-image {
  background-image: url('/bg-image.webp');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
</style>
