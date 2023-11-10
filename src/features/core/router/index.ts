import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('..//..//mainpage/components/MainPage.vue')
  },
  {
    path: '/maps',
    name: 'Maps',
    component: () => import('..//..//maps/components/MapsApps.vue')
  },
  {
    path: '/bundle',
    name: 'Bundle',
    component: () => import('..//..//bundle/components/BundlePage.vue')
  },
  {
    path: '/guns',
    name: 'Guns',
    component: () => import('..//..//arsenal/components/ValorantGuns.vue')
  },
  {
    path: '/guns/:weaponClass',
    name: 'WeaponClass',
    component: () => import('..//..//arsenal/components/WeaponPage.vue')
  },
  {
    path: '/skins/:skinClass',
    name: 'SkinClass',
    component: () => import('..//..//arsenal/components/SkinClass.vue')
  },
  {
    path: '/agents/',
    name: 'agents',
    component: () => import('..//..//agents/components/ValorantAgents.vue')
  },
  {
    path: '/agents/:agentsClass',
    name: 'AgentPage',
    component: () => import('..//..//agents/components/AgentsPage.vue')
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.VITE_BASE_URL),
  routes
})

export default router
