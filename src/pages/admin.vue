<script setup lang="ts">

</script>

<template>
  <centered-layout>
    <n-card
      class="container m-auto" content-class="p-0!"
    >
      <template #header>
        <n-h1>Administration</n-h1>
      </template>

      <admin-user-list />
    </n-card>
  </centered-layout>
</template>
