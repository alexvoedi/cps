import { defineStore } from 'pinia'
import ky from 'ky'
import { UserRole } from '@/enums/UserRole'
import type { User } from '@/types/User'

export const useUserStore = defineStore('user', {
  state: () => ({
    user: useStorage<null | User>('user', null, undefined, {
      serializer: {
        read: v => v ? JSON.parse(v) : null,
        write: v => JSON.stringify(v),
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
