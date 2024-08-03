import type { CharacterList } from '@/types/Character'
import type { PriorityListList, PriorityListListItem } from '@/types/PriorityListList'

enum Type {
  Up = 'up',
  Down = 'down',
  New = 'new',
  Activate = 'activate',
}

function getType({ oldIndex, newIndex, priorityListCharacter }: {
  oldIndex?: number
  newIndex: number
  priorityListCharacter?: PriorityListListItem
}) {
  if (oldIndex === undefined) {
    if (priorityListCharacter) {
      return Type.Activate
    }
    else {
      return Type.New
    }
  }
  else {
    if (oldIndex < newIndex) {
      return Type.Down
    }
    else {
      return Type.Up
    }
  }
}

export function calculateNewOrderedListPosition({
  characterId,
  oldIndex,
  newIndex,
  priorityListOrderedList,
  priorityListList,
  characterList,
}: {
  characterId: string
  oldIndex?: number
  newIndex: number
  priorityListOrderedList: string[]
  priorityListList: PriorityListList
  characterList: CharacterList
}): {
    fromPosition?: number
    toPosition: number
  } {
  const character = characterList.find(item => item.id === characterId)

  if (!character) {
    throw new Error('Updated item not found')
  }

  const priorityListCharacter = priorityListList.find(item => item.characterId === characterId)

  const type = getType({
    oldIndex,
    newIndex,
    priorityListCharacter,
  })

  const fromPosition = priorityListCharacter?.position

  // get the position of the character before this index
  const previousPriorityListCharacter = priorityListList.find(
    item => item.characterId === priorityListOrderedList[newIndex - 1],
  )

  // position must be at least the position of the character before
  let toPosition = previousPriorityListCharacter?.position ?? newIndex + 1

  if (previousPriorityListCharacter && (type === Type.New || type === Type.Up)) {
    toPosition += 1
  }

  if (
    type === Type.Activate
    && previousPriorityListCharacter?.position
    && priorityListCharacter?.position
    && previousPriorityListCharacter.position < priorityListCharacter.position
  ) {
    toPosition += 1
  }

  let shouldIncrement = priorityListList.some(priorityList =>
    priorityList.position === toPosition && priorityList.characterId !== character.id && !priorityList.active,
  )

  while (
    shouldIncrement
  ) {
    toPosition += 1

    shouldIncrement = priorityListList.some(priorityList =>
      priorityList.position === toPosition && priorityList.characterId !== character.id && !priorityList.active,
    )
  }

  return {
    fromPosition,
    toPosition,
  }
}
