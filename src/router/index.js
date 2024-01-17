import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/HomeView.vue')
    },
    {
      path: '/game1',
      name: 'game1',
      component: () => import('../views/Game1View.vue')
    },
    {
      path: '/game2',
      name: 'game2',
      component: () => import('../views/Game2View.vue')
    }
  ]
})

export default router
