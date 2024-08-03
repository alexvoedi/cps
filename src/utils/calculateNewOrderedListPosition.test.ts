import { describe } from 'vitest'
import type { PriorityListList } from '@/types/PriorityListList'
import type { CharacterList } from '@/types/Character'
import { CharacterClass } from '@/enums/CharacterClass'
import { calculateNewOrderedListPosition } from '@/utils/calculateNewOrderedListPosition'

const characterList: CharacterList = [
  {
    id: 'a',
    class: CharacterClass.Warrior,
    name: 'A',
    roles: [],
  },
  {
    id: 'b',
    class: CharacterClass.DeathKnight,
    name: 'B',
    roles: [],
  },
  {
    id: 'c',
    class: CharacterClass.DemonHunter,
    name: 'C',
    roles: [],
  },
  {
    id: 'd',
    class: CharacterClass.Druid,
    name: 'D',
    roles: [],
  },
  {
    id: 'e',
    class: CharacterClass.Evoker,
    name: 'E',
    roles: [],
  },
  {
    id: 'f',
    class: CharacterClass.Hunter,
    name: 'F',
    roles: [],
  },
  {
    id: 'g',
    class: CharacterClass.Mage,
    name: 'G',
    roles: [],
  },
  {
    id: 'h',
    class: CharacterClass.Monk,
    name: 'H',
    roles: [],
  },
  {
    id: 'i',
    class: CharacterClass.Paladin,
    name: 'I',
    roles: [],
  },
  {
    id: 'j',
    class: CharacterClass.Warlock,
    name: 'J',
    roles: [],
  },
]

// a, e & j are inactive
const priorityListOrderedList: string[] = [
  'c',
  'd',
  'f',
  'h',
]

// b, g & i are not in the list yet
const priorityListList: PriorityListList = [
  {
    characterId: 'a',
    position: 1,
    active: false,
  },
  {
    characterId: 'c',
    position: 2,
    active: true,
  },
  {
    characterId: 'd',
    position: 3,
    active: true,
  },
  {
    characterId: 'e',
    position: 4,
    active: false,
  },
  {
    characterId: 'f',
    position: 5,
    active: true,
  },
  {
    characterId: 'h',
    position: 6,
    active: true,
  },
  {
    characterId: 'j',
    position: 7,
    active: false,
  },
]

describe('calculateNewOrderedListPosition', (it) => {
  it('should have the same position if it does not change', ({ expect }) => {
    const {
      fromPosition,
      toPosition,
    } = calculateNewOrderedListPosition({
      characterId: 'c',
      oldIndex: 0,
      newIndex: 0,
      characterList,
      priorityListList,
      priorityListOrderedList,
    })

    expect(fromPosition).toBe(2)
    expect(toPosition).toBe(2)
  })

  it('should return the correct position when moving up', ({ expect }) => {
    const priorityListOrderedList: string[] = [
      'd',
      'c',
      'f',
      'h',
    ]

    const {
      fromPosition,
      toPosition,
    } = calculateNewOrderedListPosition({
      characterId: 'd',
      oldIndex: 1,
      newIndex: 0,
      characterList,
      priorityListList,
      priorityListOrderedList,
    })

    expect(fromPosition).toBe(3)
    expect(toPosition).toBe(2)
  })

  it('should return the correct position when moving down', ({ expect }) => {
    const priorityListOrderedList: string[] = [
      'c',
      'f',
      'h',
      'd',
    ]

    const {
      fromPosition,
      toPosition,
    } = calculateNewOrderedListPosition({
      characterId: 'd',
      oldIndex: 1,
      newIndex: 3,
      characterList,
      priorityListList,
      priorityListOrderedList,
    })

    expect(fromPosition).toBe(3)
    expect(toPosition).toBe(6)
  })

  it('should return the correct position when adding an inactive item to the top', ({ expect }) => {
    const priorityListOrderedList: string[] = [
      'a',
      'c',
      'd',
      'f',
      'h',
    ]

    const {
      fromPosition,
      toPosition,
    } = calculateNewOrderedListPosition({
      characterId: 'a',
      newIndex: 0,
      characterList,
      priorityListList,
      priorityListOrderedList,
    })

    expect(fromPosition).toBe(1)
    expect(toPosition).toBe(1)
  })

  it('should return the correct position when adding an inactive item to the bottom', ({ expect }) => {
    const priorityListOrderedList: string[] = [
      'c',
      'd',
      'f',
      'h',
      'a',
    ]

    const {
      fromPosition,
      toPosition,
    } = calculateNewOrderedListPosition({
      characterId: 'a',
      newIndex: 4,
      characterList,
      priorityListList,
      priorityListOrderedList,
    })

    expect(fromPosition).toBe(1)
    expect(toPosition).toBe(6)
  })

  it('should return the correct position when adding an inactive item to the middle', ({ expect }) => {
    const priorityListOrderedList: string[] = [
      'c',
      'd',
      'j',
      'f',
      'h',
    ]

    const {
      fromPosition,
      toPosition,
    } = calculateNewOrderedListPosition({
      characterId: 'j',
      newIndex: 2,
      characterList,
      priorityListList,
      priorityListOrderedList,
    })

    expect(fromPosition).toBe(7)
    expect(toPosition).toBe(5)
  })

  it('should return the correct position when adding an inactive item its previous position', ({ expect }) => {
    const priorityListOrderedList: string[] = [
      'c',
      'd',
      'j',
      'f',
      'h',
    ]

    const {
      fromPosition,
      toPosition,
    } = calculateNewOrderedListPosition({
      characterId: 'e',
      newIndex: 2,
      characterList,
      priorityListList,
      priorityListOrderedList,
    })

    expect(fromPosition).toBe(4)
    expect(toPosition).toBe(4)
  })

  it('should return the correct position when adding a new item to the top', ({ expect }) => {
    const priorityListOrderedList: string[] = [
      'b',
      'c',
      'd',
      'f',
      'h',
    ]

    const {
      fromPosition,
      toPosition,
    } = calculateNewOrderedListPosition({
      characterId: 'b',
      newIndex: 0,
      characterList,
      priorityListList,
      priorityListOrderedList,
    })

    expect(fromPosition).toBe(undefined)
    expect(toPosition).toBe(2)
  })

  it('should return the correct position when adding a new item to the bottom', ({ expect }) => {
    const priorityListOrderedList: string[] = [
      'c',
      'd',
      'f',
      'h',
      'b',
    ]

    const {
      fromPosition,
      toPosition,
    } = calculateNewOrderedListPosition({
      characterId: 'b',
      newIndex: 4,
      characterList,
      priorityListList,
      priorityListOrderedList,
    })

    expect(fromPosition).toBe(undefined)
    expect(toPosition).toBe(8)
  })

  it('should return the correct position when adding a new item to the middle', ({ expect }) => {
    const priorityListOrderedList: string[] = [
      'c',
      'd',
      'b',
      'f',
      'h',
    ]

    const {
      fromPosition,
      toPosition,
    } = calculateNewOrderedListPosition({
      characterId: 'b',
      newIndex: 2,
      characterList,
      priorityListList,
      priorityListOrderedList,
    })

    expect(fromPosition).toBe(undefined)
    expect(toPosition).toBe(5)
  })

  it('should throw an error if the character is not found', ({ expect }) => {
    expect(() => {
      calculateNewOrderedListPosition({
        characterId: 'z',
        newIndex: 0,
        characterList,
        priorityListList,
        priorityListOrderedList,
      })
    }).toThrow('Updated item not found')
  })
})
