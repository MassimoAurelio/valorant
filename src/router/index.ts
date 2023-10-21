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
    path: '/guns',
    name: 'Guns',
    component: () => import('../components/arsenal/ValorantGuns.vue')
  } /* ,
  {
    path: '/guns/rifle',
    name: 'Rifle',
    component: () => import('../components/arsenal/dropDownPages/RifleItem.vue')
  },
  {
    path: '/guns/heavy',
    name: 'Heavy',
    component: () => import('../components/arsenal/dropDownPages/HeavyItem.vue')
  },
  {
    path: '/guns/shotgun',
    name: 'Shotgun',
    component: () => import('../components/arsenal/dropDownPages/ShotGunItem.vue')
  },
  {
    path: '/guns/sidearm',
    name: 'Sidearm',
    component: () => import('../components/arsenal/dropDownPages/SidearmItem.vue')
  },
  {
    path: '/guns/smg',
    name: 'SMG',
    component: () => import('../components/arsenal/dropDownPages/SmgItem.vue')
  },
  {
    path: '/guns/meele',
    name: 'Melee',
    component: () => import('../components/arsenal/dropDownPages/MeleeItem.vue')
  },
  {
    path: '/guns/sniper',
    name: 'Sniper',
    component: () => import('../components/arsenal/dropDownPages/SniperItem.vue')
  } */,
  {
    path: '/guns/:weaponClass',
    name: 'WeaponClass',
    component: () => import('../components/arsenal/WeaponPage.vue')
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.VITE_BASE_URL),
  routes
})

export default router
