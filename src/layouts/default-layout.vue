<script setup lang="ts">

</script>

<template>
  <n-layout has-sider class="h-100dvh">
    <the-nav />

    <n-layout class="bg-image">
      <n-layout-header />

      <n-layout-content :native-scrollbar="false" class="h-full" content-class="h-full bg-image">
        <slot />
      </n-layout-content>

      <n-layout-footer />
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
