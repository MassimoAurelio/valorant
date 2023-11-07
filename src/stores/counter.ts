import { defineStore } from 'pinia'
import type { Agent, Umeniya, Map } from '..//types/interfaces'

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
  id: 'Map',
  state: () => ({
    maps: [] as Map[]
  }),
  actions: {
    setMaps(maps: Map[]) {
      this.maps = maps
    },
    addMaps(maps: Map) {
      this.maps.push(maps)
    }
  }
})
