<script setup lang="ts">
import { ref, onMounted, defineProps } from 'vue'
import { toRefs } from 'vue'
import videoData from '..//..//..//custopApi/video.json'

const props = defineProps({
  agentId: String
})

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
const skills = ref<Umeniya[] | null>(null)
const selectedSkill = ref<Umeniya | null>(null)
const selectedSkillIndex = ref<number | undefined>(undefined)
const { agentId } = toRefs(props)
const videoSrc = ref<string[]>([])

const selectSkill = (skill: Umeniya, index: number) => {
  selectedSkill.value = skill
  selectedSkillIndex.value = index
}

const fetchAgent = async () => {
  try {
    const response = await fetch(`https://valorant-api.com/v1/agents/${props.agentId}`)
    const { data } = await response.json()
    agent.value = data
    skills.value = data.abilities
  } catch (error) {
    console.error('Ошибка:', error)
  }
}

onMounted(async () => {
  await fetchAgent()
  videoSrc.value = videoData[agentId.value]
  if (agent.value && agent.value.abilities && agent.value.abilities.length > 0) {
    selectedSkill.value = agent.value.abilities[0]
    selectedSkillIndex.value = 0
  }
})
</script>

<template>
  <h2 class="title">
    <span> Special Abilities</span>
  </h2>
  <div class="second-container">
    <div class="cpecial-abilities-container" v-if="agent">
      <div class="abilities-container">
        <ul class="abilities-img-container">
          <li class="abilities-img" v-for="(skill, index) in agent.abilities" :key="index">
            <button class="skill-img-container" @click="selectSkill(skill, index)">
              <img
                :class="{ selected: selectedSkill === skill }"
                class="skill-img"
                :src="skill.displayIcon"
                alt="skill-img"
              />
              <div class="skill-hover-slide"></div>
            </button>
          </li>
        </ul>
        <div class="abilities-description" v-if="selectedSkill">
          <h3>{{ selectedSkill?.displayName }}</h3>
          <p>{{ selectedSkill?.description }}</p>
          <video
            class="video"
            :src="videoSrc[selectedSkill?.displayName]"
            autoplay
            muted
            loop
            data-testid="abilities:video"
          >
            <source :src="videoSrc[selectedSkill?.displayName]" type="video/mp4" />
          </video>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.skill-img {
  width: 72px;
  transition: filter 0.3s ease-in-out;
}

.title {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  color: #ffffff;
  font-size: 3rem;
  font-weight: 700;
  margin-top: 100px;
  padding-left: 7.3%;
  padding-right: 7.3%;
  font: bold;
}
.skill-img-container {
  position: relative;
  overflow: hidden;
  border: none;
  background: transparent;
  padding: 0;
}
.skill-img-container:hover .skill-hover-slide {
  width: 100%;
}
.skill-img-container:hover .skill-img {
  filter: brightness(0%);
}

.skill-img-container:active .skill-img {
  filter: brightness(100%);
}
.skill-img.selected {
  filter: brightness(0%);
}

.skill-img-container:focus:not(:focus-visible) {
  outline: none;
}

.skill-img-container:focus-visible {
  outline: 2px solid blue;
}

.second-container {
  position: relative;
  height: 1000px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-left: 7.3%;
  padding-right: 7.3%;
}
.abilities-description {
  width: 500px;
  margin-bottom: 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.abilities-img {
  margin-bottom: 50px;
  height: auto;
  min-height: 50px;
  transition: background-color 0.3s ease;
}

.abilities-img:hover {
  background-position: left center;
  color: #ffffff;
  text-transform: uppercase;
}

.abilities-img-container:hover {
  background-position: left center;
  color: #ffffff;
  text-transform: uppercase;
}

.abilities-img img {
  border: 1px solid #bdbcb7;
}

.abilities-img-container {
  border-color: #0f1923;
  cursor: pointer;
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: nowrap;
  list-style: none;
}

.cpecial-abilities-container {
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 500px;
  height: 100%;
  color: azure;
}

.video {
  width: 700px;
}
</style>
