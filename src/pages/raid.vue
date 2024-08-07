<script setup lang="ts">
import { useRouteQuery } from '@vueuse/router'
import { useMessage } from 'naive-ui'
import { io } from 'socket.io-client'
import { useRaidStore } from '@/store/raid'
import { socketKey } from '@/injections/socket'

const query = useLocalStorage('raid-tab', useRouteQuery('page', 'squad'))
const raidStore = useRaidStore()

onMounted(() => {
  raidStore.fetchCharacters()
})

const message = useMessage()

const socket = io(`${import.meta.env.VITE_WEBSOCKET_URL}/priority-list`, {
  path: `/socket.io`,
  withCredentials: true,
  reconnectionDelay: 5000,
  reconnection: true,
  auth: {
    token: 123,
  },
})

socket.on('exception', (error: unknown) => {
  message.error(JSON.stringify(error))
})

socket.on('raid:update', (data) => {
  raidStore.characters = data
})

socket.on('priority-list:update', (data) => {
  raidStore.priorityList = data
})

socket.on('priority-list-history:update', (data) => {
  raidStore.priorityListHistory = data
})

socket.on('priority-list-history:add', (data) => {
  raidStore.priorityListHistory.unshift(...data)
})

provide(socketKey, socket)

socket.send('Hello, server!')
</script>

<template>
  <centered-layout>
    <n-card class="max-w-360 h-full" content-class="p-0!">
      <n-tabs
        v-model:value="query"
        :default-value="query"
        :tabs-padding="20"
        justify-content="space-evenly"
        type="segment"
        size="large"
        animated
        pane-class="p-0! flex h-full flex-col"
        class="h-full"
        pane-wrapper-class="h-full"
      >
        <n-tab-pane name="squad" tab="Kader">
          <raid-squad />
        </n-tab-pane>
        <n-tab-pane name="priority-list" tab="Prio Liste">
          <raid-priority-list />
        </n-tab-pane>
        <n-tab-pane name="contribution" tab="Raidbeitrag">
          Raidbeitrag
        </n-tab-pane>
      </n-tabs>
    </n-card>
  </centered-layout>
</template>
