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
  <div class="slick-list">
    <div id="main-container" v-for="(agent, index) in agents" :key="index">
      <div class="agentsHero">
        <span class="agent-index"></span>
        <h2 class="name-agent">{{ agent?.displayName }}</h2>
        <img :src="agent.bustPortrait" class="img-agent" alt="" />
        <div class="info-agent">
          <div style="font-weight: 600">//РОЛЬ</div>
          <div class="role">
            <h2>{{ agent?.role?.displayName }}</h2>
            <img
              :src="agent?.role?.displayIcon"
              alt="Role icon"
              style="height: 30px; width: 30px"
            />
          </div>
          <h2>//БИОГРАФИЯ</h2>
          <div class="description">{{ agent?.description }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.img-agent {
  width: 30%;
  height: auto;
}

.main-container {
  position: relative;
}

.agentsHero {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}

.name-agent {
  color: azure;
  font-size: 70px;
  height: 300px;
  width: 300px;
}

.info-agent {
  display: flex;
  flex-direction: column;
  font-size: 16px;
  color: azure;
  font-weight: 300;
  height: 300px;
  width: 300px;
}

.role {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
}

.name-agent {
  display: flex;
  align-items: center;
}
</style>
