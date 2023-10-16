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
  <div>
    <router-link to="/agents/jett">
      <div class="agent-container">
        <div class="div-agent">
          <span class="span-agent">JETT</span>
        </div>
      </div>
    </router-link>
    <router-link to="/agents/gekko">
      <div class="agent-container">
        <div class="div-agent">
          <span class="span-agent">GEKKO</span>
        </div>
      </div>
    </router-link>
    <router-link to="/agents/sage">
      <div class="agent-container">
        <div class="div-agent">
          <span class="span-agent">SAGE</span>
        </div>
      </div>
    </router-link>
    <router-link to="/agents/omen">
      <div class="agent-container">
        <div class="div-agent">
          <span class="span-agent">OMEN</span>
        </div>
      </div>
    </router-link>
  </div>
</template>

<style scoped>
.agent-container {
  display: flex;
  flex-direction: column;
  position: relative;
  width: 300px;
  font-size: 4rem;
  text-transform: uppercase;
  font-weight: bold;
  text-align: left;
  font-weight: 1200;
  color: azure;
  cursor: pointer;
}

.span-agent {
  text-decoration: none !important;
}
.span-agent {
  transition: all 0.3s;
}
.span-agent:hover {
  margin-left: 10px;
}
.router-link-active {
  text-decoration: none !important;
}

.router-link-exact-active .span-agent {
  color: #ff4656;
}
</style>
