import { defineStore } from 'pinia'
import ky from 'ky'

interface BaseStore {
  backendHealthy: boolean
  video: Ref<boolean>
}

export const useBaseStore = defineStore('base', {
  state: (): BaseStore => ({
    backendHealthy: true,
    video: useLocalStorage('base/video', true),
  }),

  actions: {
    async checkBackend() {
      try {
        const response = ky.get('health', {
          prefixUrl: import.meta.env.VITE_BACKEND_URL,
          retry: 0,
        })

        const json = await response.json<{ status: string }>()

        if (json.status === 'ok') {
          this.backendHealthy = true
          setTimeout(() => this.checkBackend(), 60_000)
        }
        else {
          this.backendHealthy = false
          setTimeout(() => this.checkBackend(), 3_000)
        }
      }
      catch {
        this.backendHealthy = false
        setTimeout(() => this.checkBackend(), 3_000)
      }
    },
  },

  getters: {},
})
