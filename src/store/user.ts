import { defineStore } from 'pinia'
import ky from 'ky'
import { UserRole } from '@/enums/UserRole'
import type { User } from '@/types/User'

export const useUserStore = defineStore('user', {
  state: () => ({
    user: useSessionStorage<null | User>('user', null, {
      serializer: {
        read: JSON.parse,
        write: JSON.stringify,
      },
    }),
  }),

  actions: {
    async login(token: string) {
      const result = await ky.post(`auth/google/login`, {
        prefixUrl: import.meta.env.VITE_BACKEND_URL,
        json: {
          token,
        },
        credentials: 'include',
      })

      this.user = await result.json()
    },

    async logout() {
      this.user = null

      await ky.post('auth/google/logout', {
        credentials: 'include',
        prefixUrl: import.meta.env.VITE_BACKEND_URL,
      })
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
    isAdmin: state => state.user?.role === UserRole.Admin,
    isRaidLead: state => state.user?.role === UserRole.RaidLead,
  },
})
