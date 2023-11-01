import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../components/common/MainPage.vue')
  },
  {
    path: '/maps',
    name: 'Maps',
    component: () => import('../components/maps/MapsApps.vue')
  },
  {
    path: '/bundle',
    name: 'Bundle',
    component: () => import('../components/bundle/BundlePage.vue')
  },
  {
    path: '/guns',
    name: 'Guns',
    component: () => import('../components/arsenal/ValorantGuns.vue')
  },
  {
    path: '/guns/:weaponClass',
    name: 'WeaponClass',
    component: () => import('../components/arsenal/WeaponPage.vue')
  },
  {
    path: '/agents/',
    name: 'agents',
    component: () => import('../components/agents/ValorantAgents.vue')
  },
  {
    path: '/agents/:agentsClass',
    name: 'AgentPage',
    component: () => import('../components/agents/AgentsPage.vue')
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.VITE_BASE_URL),
  routes
})

export default router
