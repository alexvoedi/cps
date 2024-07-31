import ky from 'ky'
import { defineStore } from 'pinia'
import type { Character } from '@/types/Character'
import type { CreateCharacterDto } from '@/types/dtos/create-character.dto'
import type { SuicideKingList } from '@/types/SuicideKingList'
import type { SuicideKingHistory } from '@/types/SuicideKingHistory'

interface RaidStore {
  characters: Character[]
  suicideKing: SuicideKingList
  suicideKingHistory: SuicideKingHistory
}

export const useRaidStore = defineStore('raid', {
  state: (): RaidStore => ({
    characters: [],
    suicideKing: [],
    suicideKingHistory: [],
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

    getCharacterFromSuicideKing(id: string) {
      return this.suicideKing.find(s => s.characterId === id)
    },
  },

  getters: {
    inactiveCharacters: (state) => {
      return state.characters.filter(
        (character) => {
          const suicideKingEntry = state.suicideKing.find(suicideKing => suicideKing.characterId === character.id)

          return !suicideKingEntry || (suicideKingEntry && !suicideKingEntry.active)
        },
      )
    },
  },
})
