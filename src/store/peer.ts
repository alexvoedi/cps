import { useUrlSearchParams } from '@vueuse/core'
import type { DataConnection } from 'peerjs'
import Peer from 'peerjs'
import { defineStore } from 'pinia'
import { useHost } from '@/composables/useHost'

interface PeerStore {
  connections: DataConnection[]
}

export const usePeerStore = defineStore('peer-store', {
  state: (): PeerStore => ({
    connections: [],
  }),

  actions: {
    init(events: {
      onData: (data: any) => void
      onOpen?: (id: string) => void
      onClose?: (id: string) => void
    }) {
      const host = useHost()
      const params = useUrlSearchParams<{
        id?: string
        hostId?: string
      }>()

      const peer = new Peer(params.id || '', {
        debug: 0,
      })

      if (host.value) {
        this.createHostPeer(peer, events)
      }
      else {
        this.createPlayerPeer(peer, events)
      }
    },

    createPlayerPeer(peer: Peer, events: {
      onData: (data: any) => void
      onOpen?: (id: string) => void
      onClose?: (id: string) => void
    }) {
      const host = useHost()
      const params = useUrlSearchParams<{
        id?: string
        hostId?: string
      }>()

      peer.on('open', (id) => {
        params.id = id

        if (!host.value && params.hostId) {
          const conn = peer.connect(params.hostId)

          conn.on('data', events.onData)

          conn.on('open', () => {
            this.connections.push(conn)
            events.onOpen?.(id)
          })

          conn.on('close', () => {
            events.onClose?.(id)
          })
        }
      })
    },

    createHostPeer(peer: Peer, events: {
      onData: (response: {
        id: string
        data: any
      }) => void
      onOpen?: (id: string) => void
      onClose?: (id: string) => void
    }) {
      peer.on('connection', (conn) => {
        conn.on('data', data => events.onData({
          id: conn.peer,
          data,
        }))

        conn.on('open', () => {
          this.connections.push(conn)
          events.onOpen?.(conn.peer)
        })

        conn.on('close', () => {
          events.onClose?.(conn.peer)
          this.removePeer(conn.peer)
        })
      })
    },

    send(data: any) {
      this.connections.forEach((conn) => {
        conn.send(data)
      })
    },

    removePeer(id: string) {
      this.connections = this.connections.filter(connection => connection.peer !== id)
    },
  },
})
