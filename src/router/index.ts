import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../components/MainPage.vue')
  },
  {
    path: '/agents',
    name: 'Agents',
    component: () => import('../components/AgentsApp.vue')
  },
  {
    path: '/agents/jett',
    name: 'Jett',
    component: () => import('../components/Agents/AgentJett.vue')
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.VITE_BASE_URL),
  routes
})

export default router
