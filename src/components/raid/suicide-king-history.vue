<script setup lang="ts">
import ky from 'ky'
import { useRaidStore } from '../../store/raid'
import type { SuicideKingHistory } from '../../types/SuicideKingHistory'

const raidStore = useRaidStore()

const events = computed(() => {
  return raidStore.suicideKingHistory
})

let lastItemReached = false

async function load() {
  if (lastItemReached)
    return

  const response = await ky.get('suicide-king/history', {
    prefixUrl: import.meta.env.VITE_BACKEND_URL,
    searchParams: new URLSearchParams({
      skip: `${raidStore.suicideKingHistory.length}`,
      take: '10',
    }),
  })

  const json = await response.json<SuicideKingHistory>()

  if (json.length === 0)
    lastItemReached = true

  raidStore.suicideKingHistory.push(...json)
}
</script>

<template>
  <n-infinite-scroll class="max-h-25dvh min-h-280px" :distance="100" @load="load">
    <n-list class="overflow-y-auto overflow-x-hidden" hoverable>
      <transition-group name="fade">
        <div
          v-for="event of events"
          :key="event.id"
          class="border-b border-b-true-gray-800"
        >
          <raid-suicide-king-history-item :event="event" />
        </div>
      </transition-group>
    </n-list>
  </n-infinite-scroll>
</template>

<style>
.fade-move,
.fade-enter-active,
.fade-leave-active {
  transition: all 0.5s cubic-bezier(0.55, 0, 0.1, 1);
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: scaleY(0.01) translate(30px, 0);
}

.fade-leave-active {
  position: absolute;
}
</style>
