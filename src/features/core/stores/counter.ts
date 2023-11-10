import { defineStore } from 'pinia'
import type { Agent, Umeniya, Map, Guns, Skins, Bundle } from '../../typings/interfaces'

export const useAgentStore = defineStore({
  id: 'agent',
  state: () => ({
    agents: [] as Agent[]
  }),
  actions: {
    setAgents(agents: Agent[]) {
      this.agents = agents
    },
    addAgent(agent: Agent) {
      this.agents.push(agent)
    }
  }
})

export const useSkillStore = defineStore({
  id: 'skill',
  state: () => ({
    skill: [] as Umeniya[],
    selectedSkill: null as Umeniya | null
  }),
  actions: {
    setSkills(skills: Umeniya[]) {
      this.skill = skills
    },
    addSkill(skill: Umeniya) {
      this.skill.push(skill)
    },
    setSelectedSkill(skill: Umeniya) {
      this.selectedSkill = skill
    }
  }
})

export const useMapsStore = defineStore({
  id: 'map',
  state: () => ({
    map: [] as Map[],
    loading: false,
    error: null
  }),
  actions: {
    async fetchMaps() {
      this.loading = true
      this.error = null
      try {
        const response = await fetch('https://valorant-api.com/v1/maps')
        const { data } = await response.json()
        this.setMaps(data)
      } catch (error) {
        this.error = error
      } finally {
        this.loading = false
      }
    },
    setMaps(map: Map[]) {
      this.map = map
    },
    addMaps(map: Map) {
      this.map.push(map)
    }
  }
})

export const useBundleStore = defineStore({
  id: 'bundle',
  state: () => ({
    bundle: [] as Bundle[]
  }),
  actions: {
    setBundle(bundle: Bundle[]) {
      this.bundle = bundle
    },
    addBundle(bundle: Bundle) {
      this.bundle.push(bundle)
    }
  }
})

export const usePopupStore = defineStore({
  id: 'popup',
  state: () => ({
    showPopup: false
  }),
  actions: {
    togglePopup() {
      this.showPopup = !this.showPopup
    }
  }
})

export const useWeaponStore = defineStore({
  id: 'weapon',
  state: () => ({
    weapon: [] as Guns[],
    skin: [] as Skins[],
    weaponClass: ['heavy', 'rifle', 'shotgun', 'sidearm', 'sniper', 'smg', 'meele'] as string[],
    skinsClass: [
      'Odin',
      'Ares',
      'Vandal',
      'Bulldog',
      'Phantom',
      'Judge',
      'Bucky',
      'Frenzy',
      'Classic',
      'Ghost',
      'Sheriff',
      'Shorty',
      'Operator',
      'Guardian',
      'Marshal',
      'Spectre',
      'Stinger',
      'Melee'
    ] as string[],
    spanTextWeapon: 'All WEAPONS',
    spanTextSkin: 'All SKINS',
    routerGuns: '/guns/',
    routerSkin: '/skins/'
  }),
  actions: {
    setWeapon(weapon: Guns[]) {
      this.weapon = weapon
    },
    addWeapon(weapon: Guns) {
      this.weapon.push(weapon)
    },
    setSkins(skin: Skins[]) {
      this.skin = skin
    },
    getSkins(skin: Skins) {
      this.skin.push(skin)
    }
  }
})

export const useNavigationStore = defineStore('navigation', {
  state: () => ({
    links: [
      { title: 'AGENTS', destination: '/agents/' },
      { title: 'MAPS', destination: '/maps' },
      { title: 'ARSENAL', destination: '/guns' },
      { title: 'BUNDLE', destination: '/bundle' }
    ]
  }),
  actions: {
    addLink(newLink: any) {
      this.links.push(newLink)
    }
  }
})
