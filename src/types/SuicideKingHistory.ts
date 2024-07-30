import type { ListType } from 'naive-ui/es/upload/src/interface'

export interface SuicideKingHistoryItem {
  id: string
  characterId: string
  listType: ListType
  from?: number
  to: number
  timestamp: string
  item?: string
}

export type SuicideKingHistory = SuicideKingHistoryItem[]
