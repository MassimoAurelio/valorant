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
    <div class="agent-container">
      <div class="div-agent">
        <span class="span-agent">JETT</span>
      </div>
    </div>
  </router-link>
  <div class="agent-container">
    <div class="div-agent">
      <span class="span-agent">REYNA</span>
    </div>
  </div>
  <div class="agent-container">
    <div class="div-agent">
      <span class="span-agent">Brimstone</span>
    </div>
  </div>
  <div class="agent-container">
    <div class="div-agent">
      <span class="span-agent">Astra</span>
    </div>
  </div>
  <div class="agent-container">
    <div class="div-agent">
      <span class="span-agent">Phoenix</span>
    </div>
  </div>
  <div class="agent-container">
    <div class="div-agent">
      <span class="span-agent">Breach</span>
    </div>
  </div>
  <div class="agent-container">
    <div class="div-agent">
      <span class="span-agent">Raze</span>
    </div>
  </div>
  <div class="agent-container">
    <div class="div-agent">
      <span class="span-agent">Chamber</span>
    </div>
  </div>
  <div class="agent-container">
    <div class="div-agent">
      <span class="span-agent">Cypher</span>
    </div>
  </div>
  <div class="agent-container">
    <div class="div-agent">
      <span class="span-agent">Sage</span>
    </div>
  </div>
  <div class="agent-container">
    <div class="div-agent">
      <span class="span-agent">Skye</span>
    </div>
  </div>
  <div class="agent-container">
    <div class="div-agent">
      <span class="span-agent">Sova</span>
    </div>
  </div>
  <div class="agent-container">
    <div class="div-agent">
      <span class="span-agent">Fade</span>
    </div>
  </div>
  <div class="agent-container">
    <div class="div-agent">
      <span class="span-agent">Viper</span>
    </div>
  </div>
  <div class="agent-container">
    <div class="div-agent">
      <span class="span-agent">Gekko</span>
    </div>
  </div>
  <div class="agent-container">
    <div class="div-agent">
      <span class="span-agent"> Yoru</span>
    </div>
  </div>
  <div class="agent-container">
    <div class="div-agent">
      <span class="span-agent">Harbor</span>
    </div>
  </div>
  <div class="agent-container">
    <div class="div-agent">
      <span class="span-agent">KAYO</span>
    </div>
  </div>
  <div class="agent-container">
    <div class="div-agent">
      <span class="span-agent">Killjoy</span>
    </div>
  </div>
  <div class="agent-container">
    <div class="div-agent">
      <span class="span-agent">Neon</span>
    </div>
  </div>
  <div class="agent-container">
    <div class="div-agent">
      <span class="span-agent">Omen</span>
    </div>
  </div>
</template>

<style scoped></style>
