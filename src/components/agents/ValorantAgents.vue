<script setup lang="ts">
import { ref, onMounted } from 'vue'
import type { Agent } from '../../types/interfaces'
import { useRouter } from 'vue-router'
import { useAgentStore } from '../../stores/counter'

const agent = ref<Agent | null>(null)
const router = useRouter()
const agentStore = useAgentStore()

const fetchAgent = async () => {
  const response = await fetch('https://valorant-api.com/v1/agents/')
  const { data } = await response.json()
  const uuidToRemove = 'ded3520f-4264-bfed-162d-b080e2abccf9'
  const filteredData = data.filter((agent) => agent.uuid !== uuidToRemove)
  agent.value = filteredData
  agentStore.addAgent(filteredData)
}
const navigateToHero = (uuid: string) => {
  router.push('/agents/' + uuid)
}

onMounted(fetchAgent)
</script>

<template>
  <section>
    <h1 class="title">ALL AGENTS</h1>
    <div class="main-container">
      <div
        class="agent-cart"
        v-for="hero in agent"
        :key="hero.uuid"
        @click="navigateToHero(hero.uuid)"
      >
        <div class="name-agent">
          <span>{{ hero.displayName }}</span>
        </div>
        <img :src="hero?.displayIconSmall" alt="" />
      </div>
    </div>
  </section>
</template>

<style scoped>
.main-container {
  position: relative;
  padding-top: 5%;
  padding-left: 10%;
  padding-right: 10%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}

.title {
  display: flex;
  justify-content: center;
  font-weight: 700;
  font-size: 50px;
  color: azure;
}
.agent-cart {
  width: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 5%;
  border-radius: 10%;
  cursor: pointer;
}

.name-agent {
  display: flex;
  justify-content: center;
  font-weight: 700;
  font-size: 40px;
  width: 100px;
  cursor: pointer;
  color: azure;
}
.name-agent a {
  color: inherit;
  text-decoration: none;
}

.agent-cart img {
  width: 50%;
  height: auto;
  object-fit: cover;
}

.agent-cart:hover {
  background-color: #d65863;
}
</style>
