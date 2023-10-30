<script setup lang="ts">
import { ref, onMounted } from 'vue'
import AgentButton from '../agents/AgentsApp.vue'
import AgentDescription from '../common/descriptions/AgentDescription.vue'
import type { Agent } from '../../types/interfaces'
const agent = ref<Agent | null>(null)

const fetchAgent = async () => {
  try {
    const response = await fetch(
      'https://valorant-api.com/v1/agents/add6443a-41bd-e414-f6ad-e58d267f4e95'
    )
    const { data } = await response.json()
    agent.value = data
  } catch (error) {
    console.error('Ошибка:', error)
  }
}

onMounted(() => {
  fetchAgent()
})
</script>

<template>
  <div class="slick-list">
    <div class="first-container">
      <video
        autoplay
        muted
        loop
        data-testid
        poster="https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/bltbded518020183769/5eb26f5389bac8148a8006cc/agent-background-generic.JPG"
      >
        <source
          src="https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt29d7c4f6bc077e9e/5eb26f54402b8b4d13a56656/agent-background-generic.mp4"
          type="video/mp4"
        />
      </video>
      <div class="main-container">
        <div class="agentsHero" v-if="agent">
          <div class="agent-buttons">
            <AgentButton />
          </div>
          <div class="agent-img">
            <img :src="agent.bustPortrait" class="img-agent" alt="" />
          </div>
          <div class="info-agent" style="color: azure">
            <div style="font-weight: 600">// ROLE</div>
            <div class="role">
              <h1>{{ agent.role.displayName }}</h1>
              <img
                :src="agent.role.displayIcon"
                alt="Role icon"
                style="height: 30px; width: 30px"
              />
            </div>
            <h3>// BIOGRAPHY</h3>
            <div class="description">{{ agent.description }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <AgentDescription :agentId="'add6443a-41bd-e414-f6ad-e58d267f4e95'" />
</template>

<style scoped>
.main-container {
  position: relative;
  height: 700px;
}

.agent-buttons {
  display: flex;
  flex-direction: column;
}

.agent-img,
.img-agent,
.abilities-container {
  height: 100%;
}

.agent-img {
  margin-left: 100px;
}

.agentsHero {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding-left: 7.3%;
  padding-right: 7.3%;
  height: 100%;
}

video {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
}
</style>
