<script setup lang="ts">
import { onMounted } from 'vue'
import { useAgentStore } from '../../stores/counter'

const agentStore = useAgentStore()

const fetchAgenst = async () => {
  const response = await fetch('https://valorant-api.com/v1/agents')
  const result = await response.json()
  agentStore.setAgents(result.data)
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

.span-agent:hover {
  margin-left: 10px;
}

a {
  text-decoration: none;
}

.router-link-exact-active .span-agent {
  color: #ff4656;
  text-decoration: none;
}
</style>
