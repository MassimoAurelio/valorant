<script setup lang="ts">
import { ref, onMounted } from "vue";
import AgentButton from "../AgentsApp.vue";
import AgentDescription from "../Agents/AgentDescription.vue";

interface Role {
  uuid: string;
  displayName: string;
  description: string;
  displayIcon: string;
}

interface Agent {
  displayName: string;
  bustPortrait: string;
  description: string;
  role: Role;
  displayIcon: string;
  abilities: Umeniya[];
}

interface Umeniya {
  abilities: string;
  displayIcon: string;
  displayName: string;
  slot: string;
  description: string;
}

const agent = ref<Agent | null>(null);
const skills = ref<Umeniya | null>(null);
const showDescription = ref(true);
const selectedSkill = ref(false);

const fetchAgent = async () => {
  try {
    const response = await fetch(
      "https://valorant-api.com/v1/agents/add6443a-41bd-e414-f6ad-e58d267f4e95"
    );
    const { data } = await response.json();
    agent.value = data;
    skills.value = data.abilities;
  } catch (error) {
    console.error("Ошибка:", error);
  }
};

onMounted(() => {
  fetchAgent();
});
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
    <h2 class="title">
      <span> Special Abilities</span>
    </h2>
  </div>
  <AgentDescription />
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

.second-container {
  position: relative;
  height: 1000px;
}

.agent-img,
.img-agent,
.abilities-container {
  height: 100%;
}

.agent-img {
  margin-left: 100px;
}
/* .skill-img {
  width: 80px;
  transition: filter 0.3s ease-in-out;
}
.skill-img-container {
  position: relative;
  overflow: hidden;
}
.skill-img-container:hover .skill-hover-slide {
  width: 100%;
} */

.agentsHero {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding-left: 7.3%;
  padding-right: 7.3%;
  height: 100%;
}
/* 
.cpecial-abilities-container {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  padding-left: 7.3%;
  padding-right: 7.3%;
  height: 100%;
  color: azure;
} */

.title {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  color: #ffffff;
  font-size: 3rem;
  font-weight: 700;
  font: bold;
}

/* .abilities-img {
  margin-bottom: 50px;
  height: auto;
  min-height: 50px;
  transition: background-color 0.3s ease;
}

.abilities-img:hover {
  background-position: left center;
  color: #ffffff;
  text-transform: uppercase;
} */
video {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
}

/* .abilities-img-container {
  border-color: #0f1923;
  cursor: pointer;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-items: flex-start;
  justify-content: flex-start;
  list-style: none;
}

.abilities-img-container:hover {
  background-position: left center;
  color: #ffffff;
  text-transform: uppercase;
}

.abilities-img img {
  border: 1px solid #bdbcb7;
} */
</style>
