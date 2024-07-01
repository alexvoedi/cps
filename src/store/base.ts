import { defineStore } from 'pinia'

interface BaseStore {
  name: string | null
}

export const useBaseStore = defineStore('base', {
  state: (): Ref<BaseStore> => useSessionStorage('base', {
    name: null,
  }),

  actions: {
    setName(name: string) {
      this.name = name
    },
  },

  getters: {},
})
