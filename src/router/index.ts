import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../components/common/MainPage.vue')
  },
  {
    path: '/agents/jett',
    name: 'Jett',
    component: () => import('../components/agents/AgentJett.vue')
  },
  {
    path: '/agents/gekko',
    name: 'Gekko',
    component: () => import('../components/agents/AgentGekko.vue')
  },
  {
    path: '/agents/sage',
    name: 'Sage',
    component: () => import('../components/agents/AgentSage.vue')
  },
  {
    path: '/agents/omen',
    name: 'Omen',
    component: () => import('../components/agents/AgentOmen.vue')
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
    path: '/skins/:skinClass',
    name: 'SkinClass',
    component: () => import('../components/arsenal/SkinClass.vue')
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.VITE_BASE_URL),
  routes
})

export default router
