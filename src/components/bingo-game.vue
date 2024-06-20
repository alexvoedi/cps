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

function popout() {
  const url = new URL('/bingo/popout', window.location.origin)

  const query = new URLSearchParams(url.search)

  query.set('seed', route.query.seed?.toString() || getRandomSeed())

  window.open(`${url.origin}${url.pathname}?${query}`, 'WoW Bingo', 'width=800,height=800,location=no,scrollbars=no,status=no,titlebar=no,toolbar=no')
}
</script>

<template>
  <h1>Bingo</h1>

  <button @click="popout()">
    Popout
  </button>

  <bingo-board :board-size="boardSize" />
</template>

<style>

</style>
