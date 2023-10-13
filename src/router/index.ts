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
  },
  {
    path: '/agents/gekko',
    name: 'Gekko',
    component: () => import('../components/Agents/AgentGekko.vue')
  },
  {
    path: '/agents/sage',
    name: 'Sage',
    component: () => import('../components/Agents/AgentSage.vue')
  },
  {
    path: '/agents/omen',
    name: 'Omen',
    component: () => import('../components/Agents/AgentOmen.vue')
  },
  {
    path: '/agents/viper',
    name: 'Viper',
    component: () => import('../components/Agents/AgentViper.vue')
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.VITE_BASE_URL),
  routes
})

export default router
