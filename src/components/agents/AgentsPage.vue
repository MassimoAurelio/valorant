<script setup lang="ts">
import { ref, onMounted, watch } from 'vue'
import type { Agent } from '../../types/interfaces'
import { useRoute } from 'vue-router'

const route = useRoute()
const agent = ref<Agent | null>(null)
const agentsClass = route.params.agentsClass

const fetchAgent = async () => {
  const response = await fetch('https://valorant-api.com/v1/agents/' + agentsClass)
  const { data } = await response.json()
  agent.value = data
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
        <h1 class="name-agent">{{ agent?.displayName }}</h1>
        <div class="description-agent">{{ agent?.description }}</div>
      </div>
      <img class="img-agent" :src="agent?.fullPortrait" alt="lazy" />
    </div>
  </section>
</template>

<style scoped>
.main-container {
  height: 700px;
  position: relative;
  display: flex;
  padding-left: 20%;
  padding-right: 20%;
  padding-top: 5%;
}
.description {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 30%;
}
.img-agent {
  width: 100%;
  height: 100%;
}
</style>
