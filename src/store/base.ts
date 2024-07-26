import { defineStore } from 'pinia'

interface BaseStore {
  video: Ref<boolean>
}

export const useBaseStore = defineStore('base', {
  state: (): BaseStore => ({
    video: useLocalStorage('base/video', true),
  }),

  actions: {},

  getters: {},
})
