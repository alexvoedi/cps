import type { RouteRecordRaw } from 'vue-router'
import { createRouter, createWebHistory } from 'vue-router'

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
    path: '/admin',
    component: () => import('./pages/admin.vue'),
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

export { router }
