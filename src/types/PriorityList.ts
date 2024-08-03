export interface PriorityListItem {
  characterId: string
  active: boolean
  position?: number
  tSetPosition?: number
}

export type PriorityList = PriorityListItem[]
