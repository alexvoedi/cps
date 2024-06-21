<script setup lang="ts">
import seedrandom from 'seedrandom'

const route = useRoute()
const router = useRouter()

const boardSize = ref(5)

function getRandomSeed() {
  return Array.from({ length: boardSize.value }, () => Math.floor(Math.random() * 10)).join('')
}

if (route.query.seed) {
  seedrandom(route.query.seed.toString(), { global: true })
}
else {
  const seed = getRandomSeed()
  seedrandom(seed, { global: true })
  router.push({ query: { seed } })
}
</script>

<template>
  <n-layout class="h-full" content-class="overflow-hidden">
    <div class="flex flex-col h-full">
      <div class="overflow-hidden">
        <bingo-board :board-size="boardSize" />
      </div>
    </div>
  </n-layout>
</template>

<style>

</style>
