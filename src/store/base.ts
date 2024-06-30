import { defineStore } from 'pinia'

interface BaseStore {
  name: string | null
}

export const useBaseStore = defineStore('base', {
  state: (): BaseStore => ({
    name: null,
  }),

  actions: {
    setName(name: string) {
      this.name = name
    },
  },

  getters: {},
})
