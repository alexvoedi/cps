import type { UserRole } from '@/enums/UserRole'

export interface User {
  id: string
  email: string
  role: UserRole
}
