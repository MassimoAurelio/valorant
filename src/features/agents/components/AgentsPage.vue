<script setup lang="ts">
import { watch, computed } from 'vue'
import { useRoute } from 'vue-router'
import Popper from 'vue3-popper'
import { useAgentStore, useSkillStore } from '..//..//..//stores/counter'

const route = useRoute()
const agentsClass = route.params.agentsClass
const agentStore = useAgentStore()
const skillStore = useSkillStore()

//Создал для читабельности т.к в template везде использовать agentStore.agents[0] некрасиво 🤢
const agent = computed(() => agentStore.agents[0])

const showSkillInfo = (abi: any) => {
  skillStore.setSelectedSkill(abi)
}

const fetchAgent = async () => {
  try {
    const response = await fetch('https://valorant-api.com/v1/agents/' + agentsClass)
    const { data } = await response.json()
    agentStore.setAgents([data])
    agentStore.addAgent(data)
    skillStore.setSkills(data.abilities)
    showSkillInfo(skillStore.skill?.[0])
  } catch (error) {
    console.error('WARNING:', error)
  }
}

watch(
  () => route.params.agentsClass,
  () => {
    fetchAgent()
  },
  { immediate: true }
)
</script>

<template>
  <section>
    <div class="main-container" v-if="agent">
      <div class="description">
        <div class="left-up-block">
          <div class="name-img-agent">
            <h1 class="name-agent">{{ agent?.displayName }}</h1>
            <Popper>
              <img class="img-role" v-lazy="agent?.role.displayIcon" alt="" />
              <template #content>
                <div class="tooltip">{{ agent?.role.description }}</div>
              </template>
            </Popper>
          </div>
          <div class="description-agent">{{ agent?.description }}</div>
        </div>
        <img class="img-agent" v-lazy="agent?.fullPortrait" alt="" />
      </div>
      <nav v-if="skillStore.skill" class="navigation-panel-skills">
        <div class="main-navigation" v-for="(abi, index) in skillStore.skill" :key="index">
          <div
            class="main-container-skills"
            @click="showSkillInfo(abi)"
            :class="{ 'selected-skill': skillStore.selectedSkill === abi }"
          >
            <div class="agent-skills">
              {{ abi?.displayName }}
            </div>
            <img class="skill-img" v-lazy="abi?.displayIcon" alt="" />
          </div>
        </div>
      </nav>
      <div v-if="skillStore.selectedSkill" class="skill-description">
        {{ skillStore.selectedSkill.description }}
      </div>
    </div>
  </section>
</template>

<style scoped>
.main-container {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-left: 25%;
  padding-right: 25%;
  overflow: auto;
}

.name-img-agent {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}

.description-img-container {
  display: flex;
  flex-direction: row;
}

.navigation-panel-skills {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  padding-top: 4%;
}

.skill-img {
  width: 100px;
}
.description {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  color: azure;
}
.img-agent {
  width: 50%;
  height: 50%;
}

.img-role {
  cursor: pointer;
  width: 25px;
  height: 25px;
}
.name-agent {
  margin-right: 10px;
}
.left-up-block {
  width: 30%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.tooltip {
  background-color: #ff2739;
  border-radius: 8px;
  min-width: 200px;
  max-width: 300px;
  min-height: 110px;
  max-height: 500px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.agent-skills {
  display: flex;

  align-items: center;
  justify-content: center;
  color: azure;
  font-weight: 700;
}
.main-container-skills {
  width: 100%;
  cursor: pointer;
  border: 2px solid azure;
  padding: 10%;
}

.skill-description {
  margin-top: 3%;
  color: azure;
}

.main-container-skills:hover {
  border-color: rgb(0, 0, 0);
}
.selected-skill {
  border-color: black;
}
</style>
../../core/stores/counter