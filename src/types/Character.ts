import type { CharacterClass } from '@/enums/CharacterClass'
import type { CharacterRole } from '@/enums/CharacterRole'

export interface Character {
  id: string
  name: string
  class: CharacterClass
  roles: CharacterRole[]
}

export type CharacterList = Character[]
