<script setup lang="ts">
import { ref, watch } from 'vue'
import type { Umeniya } from '../../types/interfaces'
import { useRoute } from 'vue-router'
import Popper from 'vue3-popper'
import { useAgentStore } from '../../stores/counter'

const route = useRoute()
const agentsClass = route.params.agentsClass
const agentStore = useAgentStore()
const selectedSkill = ref<Umeniya | null>(null)
const skills = ref<Umeniya[] | null>(null)

const showSkillInfo = (abi) => {
  selectedSkill.value = abi
}

const fetchAgent = async () => {
  const response = await fetch('https://valorant-api.com/v1/agents/' + agentsClass)
  const { data } = await response.json()
  skills.value = data.abilities
  agentStore.setAgents([data])
  agentStore.addAgent(data)
  showSkillInfo(skills.value[0])
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
    <div class="main-container" v-if="agentStore.agents[0]">
      <div class="description">
        <div class="left-up-block">
          <div class="name-img-agent">
            <h1 class="name-agent">{{ agentStore.agents[0]?.displayName }}</h1>
            <Popper>
              <img class="img-role" v-lazy="agentStore.agents[0]?.role.displayIcon" alt="" />
              <template #content>
                <div class="tooltip">{{ agentStore.agents[0]?.role.description }}</div>
              </template>
            </Popper>
          </div>
          <div class="description-agent">{{ agentStore.agents[0]?.description }}</div>
        </div>
        <img class="img-agent" v-lazy="agentStore.agents[0]?.fullPortrait" alt="" />
      </div>
      <nav v-if="skills" class="navigation-panel-skills">
        <div class="main-navigation" v-for="(abi, index) in skills" :key="index">
          <div
            class="main-container-skills"
            @click="showSkillInfo(abi)"
            :class="{ 'selected-skill': selectedSkill === abi }"
          >
            <div class="agent-skills">
              {{ abi?.displayName }}
            </div>
            <img class="skill-img" v-lazy="abi?.displayIcon" alt="" />
          </div>
        </div>
      </nav>
      <div v-if="selectedSkill" class="skill-description">
        {{ selectedSkill.description }}
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
