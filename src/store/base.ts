import { defineStore } from 'pinia'
import { MessageType } from '@/enums/MessageType'
import { usePeerStore } from '@/store/peer'

interface BaseStore {
  name: string | null
}

export const useBaseStore = defineStore('base', {
  state: (): BaseStore => ({
    name: null,
  }),

  actions: {
    setName(name: string) {
      const peer = usePeerStore()

      this.name = name

      peer.send({ type: MessageType.Admin, name })
    },
  },

  getters: {},
})
