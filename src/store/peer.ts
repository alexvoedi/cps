import { useUrlSearchParams } from '@vueuse/core'
import { useMessage } from 'naive-ui'
import type { DataConnection } from 'peerjs'
import Peer from 'peerjs'
import { defineStore } from 'pinia'
import { useBaseStore } from '@/store/base'
import { useQuizStore } from '@/store/quiz'

interface PeerStore {
  connections: DataConnection[]
}

export const usePeerStore = defineStore('peer-store', {
  state: (): PeerStore => ({
    connections: [],
  }),

  actions: {
    init(onData: (data: any) => void) {
      const params = useUrlSearchParams<{
        id?: string
        host?: boolean
        hostId?: string
      }>()

      const peer = new Peer(params.id || '', {
        debug: 0,
      })

      if (params.host) {
        this.createHostPeer(peer, onData)
      }
      else {
        this.createClientPeer(peer, onData)
      }
    },

    createClientPeer(peer: Peer, onData: (data: any) => void) {
      const base = useBaseStore()
      const quiz = useQuizStore()
      const message = useMessage()
      const params = useUrlSearchParams<{
        id?: string
        host?: boolean
        hostId?: string
      }>()

      peer.on('open', (id) => {
        params.id = id

        if (!params.host && params.hostId) {
          const conn = peer.connect(params.hostId)

          conn.on('data', onData)

          conn.on('open', () => {
            this.connections.push(conn)
            this.send({ state: quiz.state, name: base.name })
          })

          conn.on('close', () => {
            message.warning(`Disconnected from host!`)
          })
        }
      })
    },

    createHostPeer(peer: Peer, onData: (response: {
      id: string
      data: any
    }) => void) {
      const message = useMessage()

      peer.on('connection', (conn) => {
        conn.on('data', data => onData({
          id: conn.peer,
          data,
        }))

        conn.on('open', () => {
          this.connections.push(conn)
          message.info(`Connected to ${conn.peer}`)
        })

        conn.on('close', () => {
          message.info(`Disconnected from ${conn.peer}`)
        })
      })
    },

    send(data: any) {
      this.connections.forEach((conn) => {
        conn.send(data)
      })
    },
  },

  getters: {
    isHost: () => Boolean(useUrlSearchParams().host),
  },
})
