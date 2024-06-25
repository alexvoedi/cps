import { useMessage } from 'naive-ui'
import type { DataConnection } from 'peerjs'
import Peer from 'peerjs'

export function usePeer(onData: (data: any) => void) {
  const params = useUrlSearchParams<{
    id?: string
    hostId?: string
  }>()

  const connections: DataConnection[] = []

  const message = useMessage()

  const peer = new Peer(params.id || '', {
    debug: 0,
  })

  function connect(id: string) {
    const conn = peer.connect(id)

    conn.on('open', () => connections.push(conn))

    conn.on('data', onData)
  }

  peer.on('open', () => {
    if (params.hostId) {
      connect(params.hostId)
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

  const isHost = computed(() => !params.hostId)

  return {
    peer,
    connections,
    isHost,
  }
}
