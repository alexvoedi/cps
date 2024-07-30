import type { Character } from '@/types/Character'

export type CreateCharacterDto = Pick<Character, 'name' | 'class' | 'roles'>
