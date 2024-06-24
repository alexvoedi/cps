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
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export { router }
