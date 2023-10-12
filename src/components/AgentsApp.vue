<script setup lang="ts">
import { ref, onMounted } from 'vue'

interface Agent {
  displayName: string
  bustPortrait: string
  description: string
  role: string
  displayIcon: string
}

const agents = ref<Agent[]>([])

const fetchAgenst = async () => {
  try {
    const response = await fetch('https://valorant-api.com/v1/agents')
    const result = await response.json()
    agents.value = result.data
  } catch (error) {
    console.error('Ошибка:', error)
  }
}

onMounted(() => {
  fetchAgenst()
})
</script>

<template>
  <router-link to="/agents/jett">
    <div class="agent-container" v-for="(item, index) in agents" :key="index">
      <div class="div-agent">
        <span class="span-agent">{{ item.displayName }}</span>
      </div>
    </div>
  </router-link>
</template>

<style scoped>
.agent-container {
  width: 300px;
  font-size: 4rem;
  text-transform: uppercase;
  font-weight: bold;
  text-align: left;
  font-weight: 1200;
  display: flex;
  align-items: center;
  color: azure;
  cursor: pointer;
}

.span-agent {
  transition: all 0.3s;
}

.span-agent:hover {
  margin-left: 10px;
}
</style>
