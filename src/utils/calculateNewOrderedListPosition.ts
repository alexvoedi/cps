import type { CharacterList } from '@/types/Character'
import type { SuicideKingList, SuicideKingListItem } from '@/types/SuicideKingList'

enum Type {
  Up = 'up',
  Down = 'down',
  New = 'new',
  Activate = 'activate',
}

function getType({ oldIndex, newIndex, suicideKingCharacter }: {
  oldIndex?: number
  newIndex: number
  suicideKingCharacter?: SuicideKingListItem
}) {
  if (oldIndex === undefined) {
    if (suicideKingCharacter) {
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
  suicideKingOrderedList,
  suicideKingList,
  characterList,
}: {
  characterId: string
  oldIndex?: number
  newIndex: number
  suicideKingOrderedList: string[]
  suicideKingList: SuicideKingList
  characterList: CharacterList
}): {
    fromPosition?: number
    toPosition: number
  } {
  const character = characterList.find(item => item.id === characterId)

  if (!character) {
    throw new Error('Updated item not found')
  }

  const suicideKingCharacter = suicideKingList.find(item => item.characterId === characterId)

  const type = getType({
    oldIndex,
    newIndex,
    suicideKingCharacter,
  })

  const fromPosition = suicideKingCharacter?.position

  // get the position of the character before this index
  const previousSuicideKingCharacter = suicideKingList.find(
    (item) => {
      if (type === Type.New) {
        return item.characterId === suicideKingOrderedList[newIndex - 1]
      }
      else if (type === Type.Activate) {
        return item.characterId === suicideKingOrderedList[newIndex - 1]
      }
      else if (type === Type.Up) {
        return item.characterId === suicideKingOrderedList[newIndex - 1]
      }
      else if (type === Type.Down) {
        return item.characterId === suicideKingOrderedList[newIndex - 1]
      }

      throw new Error('Invalid type')
    },
  )

  // position must be at least the position of the character before
  let toPosition = previousSuicideKingCharacter?.position ?? newIndex + 1

  if (type === Type.New && previousSuicideKingCharacter) {
    toPosition += 1
  }

  if (type === Type.Up && previousSuicideKingCharacter) {
    toPosition += 1
  }

  let shouldIncrement = suicideKingList.some(suicideKing =>
    suicideKing.position === toPosition && suicideKing.characterId !== character.id && !suicideKing.active,
  )

  // console.log(previousSuicideKingCharacter)

  while (
    shouldIncrement
  ) {
    toPosition += 1

    shouldIncrement = suicideKingList.some(suicideKing =>
      suicideKing.position === toPosition && suicideKing.characterId !== character.id && !suicideKing.active,
    )
  }

  return {
    fromPosition,
    toPosition,
  }
}
