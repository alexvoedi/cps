import type { ListType } from 'naive-ui/es/upload/src/interface'

export interface SuicideKingHistoryItem {
  characterId: string
  listType: ListType
  from?: number
  to: number
}

export type SuicideKingHistory = SuicideKingHistoryItem[]
