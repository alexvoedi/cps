import { useMessage } from 'naive-ui'
import type { DataConnection } from 'peerjs'
import Peer from 'peerjs'

export function usePeer(onData: (data: any) => void) {
  const params = useUrlSearchParams<{
    id?: string
    host?: boolean
    hostId?: string
  }>()

  const connections: DataConnection[] = []

  const message = useMessage()

  const peer = new Peer(params.id || '', {
    debug: 0,
  })

  peer.on('open', () => {
    params.id = peer.id

    if (params.hostId) {
      const conn = peer.connect(params.hostId)

      conn.on('open', () => connections.push(conn))
      conn.on('data', onData)
    }

    peer.on('connection', (conn) => {
      conn.on('data', onData)

      conn.on('open', () => {
        connections.push(conn)
        message.info(`Connected to ${conn.peer}`)
      })

      conn.on('close', () => {
        message.info(`Disconnected from ${conn.peer}`)
      })
    })

    peer.on('error', (err) => {
      console.error(err)
    })
  })

  const isHost = computed(() => Boolean(params.host) === true)

  const peerId = computed(() => peer.id)

  return {
    peer,
    connections,
    isHost,
    peerId,
  }
}
