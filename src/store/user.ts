import { defineStore } from 'pinia'
import ky from 'ky'
import { useCookies } from '@vueuse/integrations/useCookies'

export const useUserStore = defineStore('user', {
  state: () => ({
    user: useSessionStorage('user', null),
  }),

  actions: {
    async login(token: string) {
      const result = await ky.post(`${import.meta.env.VITE_BACKEND_URL}/auth/google/login`, {
        json: {
          token,
        },
        credentials: 'include',
      })

      this.user = await result.json()
    },

    async logout() {
      const result = await ky.post('auth/google/logout', {
        credentials: 'include',
        prefixUrl: import.meta.env.VITE_BACKEND_URL,
      })

      if (result.ok) {
        this.user = null
      }
    },

    async update() {
      if (!this.user)
        return

      const json = {
        user: this.user,
      }

      const response = await ky.post(`auth/google/verify`, {
        json,
        credentials: 'include',
        prefixUrl: import.meta.env.VITE_BACKEND_URL,
      })

      if (response.ok) {
        this.user = await response.json()
      }
    },
  },

  getters: {
    isLoggedIn: state => !!state.user,
  },
})
