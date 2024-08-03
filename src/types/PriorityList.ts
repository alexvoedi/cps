export interface PriorityListListItem {
  characterId: string
  active: boolean
  position?: number
  tSetPosition?: number
}

export type PriorityListList = PriorityListListItem[]
