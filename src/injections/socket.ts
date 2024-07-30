import type { Socket } from 'socket.io-client'

export const socketKey = Symbol('socket') as InjectionKey<
  Socket
>
