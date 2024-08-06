import type { RouteRecordRaw } from 'vue-router'
import { createRouter, createWebHistory } from 'vue-router'
import { createDiscreteApi, darkTheme } from 'naive-ui'
import { UserRole } from './enums/UserRole'
import { useUserStore } from './store/user'

const { message } = createDiscreteApi(['message'], {
  configProviderProps: {
    theme: darkTheme,
  },
})

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    component: () => import('./pages/index.vue'),
  },
  {
    path: '/bingo',
    component: () => import('./pages/bingo.vue'),
  },
  {
    path: '/bingo/popout',
    component: () => import('./pages/bingo-popout.vue'),
  },
  {
    path: '/quiz',
    component: () => import('./pages/quiz.vue'),
  },
  {
    path: '/raid',
    component: () => import('./pages/raid.vue'),
    children: [],
  },
  {
    path: '/settings',
    component: () => import('./pages/settings.vue'),
  },
  {
    path: '/x',
    component: () => import('./pages/x.vue'),
  },
  {
    path: '/admin',
    meta: {
      roles: [UserRole.Admin],
    },
    component: () => import('./pages/admin.vue'),
  },
  {
    path: '/login',
    component: () => import('./pages/login.vue'),
    beforeEnter: (_to, _from) => {
      const userStore = useUserStore()
      if (userStore.isLoggedIn) {
        message.error('You are already logged in')

        return '/'
      }
      else {
        return true
      }
    },
  },
  // 404
  {
    path: '/:pathMatch(.*)*',
    component: () => import('./pages/404.vue'),
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

router.beforeEach((to) => {
  const userStore = useUserStore()

  if (to.meta.roles) {
    if (userStore.isLoggedIn && userStore.user?.role) {
      if (to.meta.roles.includes(userStore.user.role)) {
        return true
      }
      else {
        message.error('You do not have permission to access this page')
        return '/403'
      }
    }
    else {
      message.error('You must be logged in to access this page')
      return '/login'
    }
  }

  return true
})

export { router }
