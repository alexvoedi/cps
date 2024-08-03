import ky from 'ky'
import { defineStore } from 'pinia'
import type { Character } from '@/types/Character'
import type { CreateCharacterDto } from '@/types/dtos/create-character.dto'
import type { PriorityListList } from '@/types/PriorityListList'
import type { PriorityListHistory } from '@/types/PriorityListHistory'

interface RaidStore {
  characters: Character[]
  priorityList: PriorityListList
  priorityListHistory: PriorityListHistory
}

export const useRaidStore = defineStore('raid', {
  state: (): RaidStore => ({
    characters: [],
    priorityList: [],
    priorityListHistory: [],
  }),

  actions: {
    async fetchCharacters() {
      const response = await ky.get('characters', {
        prefixUrl: import.meta.env.VITE_BACKEND_URL,
        credentials: 'include',
      })

      this.characters = await response.json<Character[]>()
    },

    async createCharacter(character: CreateCharacterDto) {
      const response = ky.post('characters', {
        prefixUrl: import.meta.env.VITE_BACKEND_URL,
        json: character,
        credentials: 'include',
      })

      const json = await response.json<Character>()

      this.characters.push(json)
    },

    async deleteCharacter(id: string) {
      await ky.delete(`characters/${id}`, {
        prefixUrl: import.meta.env.VITE_BACKEND_URL,
        credentials: 'include',
      })

      this.characters = this.characters.filter(c => c.id !== id)
    },

    getCharacterById(id: string) {
      return this.characters.find(c => c.id === id)
    },

    getCharacterFromPriorityList(id: string) {
      return this.priorityList.find(s => s.characterId === id)
    },
  },

  getters: {
    inactiveCharacters: (state) => {
      return state.characters.filter(
        (character) => {
          const priorityListEntry = state.priorityList.find(priorityList => priorityList.characterId === character.id)

          return !priorityListEntry || (priorityListEntry && !priorityListEntry.active)
        },
      )
    },
  },
})
