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
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export { router }
