<script setup lang="ts">
import { ref, onMounted } from 'vue'
import VideoAgentJett from '../Agents/AgentsVideo/VideoAgentJett.vue'


interface Role {
  uuid: string
  displayName: string
  description: string
  displayIcon: string
}

interface Agent {
  displayName: string
  bustPortrait: string
  description: string
  role: Role
  displayIcon: string
  abilities: Umeniya[]
}

interface Umeniya {
  abilities: string
  displayIcon: string
  displayName: string
  slot: string
  description: string
}

const agent = ref<Agent | null>(null)
const skills = ref<Umeniya | null>(null)
const showDescription = ref(true)

const fetchAgent = async () => {
  try {
    const response = await fetch(
      'https://valorant-api.com/v1/agents/add6443a-41bd-e414-f6ad-e58d267f4e95'
    )
    const { data } = await response.json()
    agent.value = data
    skills.value = data.abilities
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
    <div id="main-container">
      <div class="agentsHero" v-if="agent">
        <span class="agent-index"></span>
        <h2 class="name-agent">{{ agent.displayName }}</h2>
        <img :src="agent.bustPortrait" class="img-agent" alt="" />
        <div class="info-agent">
          <div style="font-weight: 600">// ROLE</div>
          <div class="role">
            <h1>{{ agent.role.displayName }}</h1>
            <img :src="agent.role.displayIcon" alt="Role icon" style="height: 30px; width: 30px" />
          </div>
          <h3>// BIOGRAPHY</h3>
          <div class="description">{{ agent.description }}</div>
        </div>
      </div>
    </div>
    <div class="skill-video-container">
      <div class="cpecial-abilities" v-if="agent">
        <h2>
          <span> Special Abilities</span>
        </h2>
        <div class="abilities-container">
          <ul class="abilities-img-container">
            <li class="abilities-img" v-for="(skill, index) in agent.abilities" :key="index">
              <img :src="skill.displayIcon" alt="skill-img" style="height: 50px; width: 50px" />
              <div class="abilities-description" v-show="showDescription">
                <h3>{{ skill.displayName }}</h3>
                <p>{{ skill.description }}</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <VideoAgentJett />
    </div>
  </div>
</template>

<style scoped>
.img-agent {
  width: 30%;
  height: auto;
  cursor: pointer;
}

#main-container {
  position: relative;
}

.agentsHero {
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}

.name-agent {
  color: azure;
  font-size: 70px;
  cursor: pointer;
}

.cpecial-abilities {
  position: relative;
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
}
.role img {
  margin-top: 20px;
}

.name-agent {
  display: flex;
  align-items: center;
  cursor: pointer;
}

.description {
  font-weight: 400;
  font-size: 18px;
  line-height: 1.6;
  color: #eeeeee;
  max-width: 600px;
  text-align: justify;
  word-wrap: break-word;
}

.abilities-container {
  display: flex;
  flex-direction: column;
}

.abilities-img-container {
  display: flex;
  flex-direction: column;
}
.abilities-img {
  margin-right: 20px;
}

.special-abilities-video {
  width: 500px;
  margin-top: -15%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-left: 35px;
}

.skill-video-container {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}

.abilities-description {
  height: 300px;
  width: 300px;
}
</style>
