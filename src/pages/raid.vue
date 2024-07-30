<script setup lang="ts">
import { useRouteQuery } from '@vueuse/router'
import { useMessage } from 'naive-ui'
import { io } from 'socket.io-client'
import { useRaidStore } from '../store/raid'
import { socketKey } from '../injections/socket'

const query = useLocalStorage('raid-tab', useRouteQuery('page', 'squad'))
const raidStore = useRaidStore()

onMounted(() => {
  raidStore.fetchCharacters()
})

const message = useMessage()

const socket = io(`${import.meta.env.VITE_WEBSOCKET_URL}/suicide-king`, {
  path: `${import.meta.env.VITE_WEBSOCKET_PATH}/socket.io`,
  withCredentials: true,
  reconnectionDelay: 5000,
  reconnection: true,
})

socket.on('connect', () => {
  message.success('Connected to server!')
})

socket.on('update-raid-list', (data) => {
  raidStore.characters = data
})

socket.on('update-suicide-king-list', (data) => {
  raidStore.suicideKing = data
})

socket.on('update-suicide-king-history', (data) => {
  raidStore.suicideKingHistory = data
})

socket.on('add-suicide-king-history-entry', (data) => {
  raidStore.suicideKingHistory.unshift(...data)
})

provide(socketKey, socket)

socket.send('Hello, server!')
</script>

<template>
  <centered-layout>
    <n-card class="max-w-360" content-class="p-0!">
      <n-tabs
        v-model:value="query"
        :default-value="query"
        :tabs-padding="20"
        justify-content="space-evenly"
        type="segment"
        size="large"
        animated
        pane-class="p-0!"
      >
        <n-tab-pane name="squad" tab="Kader">
          <raid-squad />
        </n-tab-pane>
        <n-tab-pane name="suicide-king" tab=" Suicide King">
          <raid-suicide-king />
        </n-tab-pane>
        <n-tab-pane name="contribution" tab="Raidbeitrag">
          Raidbeitrag
        </n-tab-pane>
      </n-tabs>
    </n-card>
  </centered-layout>
</template>

<style>

</style>
