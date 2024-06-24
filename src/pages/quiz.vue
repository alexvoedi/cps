<!-- eslint-disable no-console -->
<script setup lang="ts">
import type { DataConnection } from 'peerjs'
import { Peer } from 'peerjs'

const params = useUrlSearchParams<{
  id?: string
  hostId?: string
}>()

const peer = new Peer(params.id || '')

const connections: DataConnection[] = []

function connect(id: string) {
  const conn = peer.connect(id)
  conn.on('open', () => {
    connections.push(conn)
    conn.send({ anser: 4 })
  })
  conn.on('data', (data) => {
    console.log('Received', data)
  })
  conn.on('error', (err) => {
    console.error(err)
  })
}

peer.on('open', () => {
  if (params.hostId) {
    console.log('i connect to the host')
    connect(params.hostId)
  }

  peer.on('open', (id) => {
    console.log(`My peer ID is: ${id}`)
  })

  peer.on('connection', (conn) => {
    conn.on('data', (data) => {
      console.log(data)
    })
    conn.on('open', () => {
      conn.send('hello!')
    })
  })

  peer.on('error', (err) => {
    console.error(err)
  })
})
</script>

<template>
  <default-layout>
    <h1>Quiz</h1>

    <button
      @click="() => {
        console.log('send test')
        connections.forEach((conn) => {
          conn.send('test')
        })
      }"
    >
      test
    </button>
  </default-layout>
</template>

<style>

</style>
