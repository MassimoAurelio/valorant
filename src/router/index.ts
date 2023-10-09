import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/agents',
    name: 'Agents',
    component: () => import('../components/AgentsApp.vue')
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.VITE_BASE_URL),
  routes
})

export default router
