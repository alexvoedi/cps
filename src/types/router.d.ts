import type { UserRole } from '@/enums/UserRole'
import 'vue-router'

export { }

declare module 'vue-router' {
  interface RouteMeta {
    roles?: UserRole[]
  }
}
