import { defineStore } from 'pinia'
import type { Agent, Umeniya } from '..//types/interfaces'

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
