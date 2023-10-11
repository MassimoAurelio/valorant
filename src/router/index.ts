import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/agents',
    name: 'Agents',
    component: () => import('../components/AgentsApp.vue')
  },

  {
    path: '/',
    name: 'Home',
    component: () => import('../components/MainPage.vue')
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.VITE_BASE_URL),
  routes
})

export default router
