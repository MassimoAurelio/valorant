<script setup lang="ts">
import { ref, onMounted } from 'vue'
import type { Agent } from '../../types/interfaces'

const agent = ref<Agent | null>(null)

const fetchAgent = async () => {
  const response = await fetch('https://valorant-api.com/v1/agents/')
  const { data } = await response.json()
  agent.value = data
}

onMounted(fetchAgent)
</script>

<template>
  <section>
    <div class="main-container">
      <div class="name-agent" v-for="(hero, index) in agent" :key="index">
        <router-link :to="'/agents/' + hero.uuid">{{ hero.displayName }}</router-link>
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
}

.name-agent {
  font-weight: 700;
  font-size: 18px;
  width: 100px;
  cursor: pointer;
  color: azure;
}
.name-agent a {
  color: inherit;
  text-decoration: none;
}

.name-agent:hover {
  color: black;
}
</style>
