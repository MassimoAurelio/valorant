<script setup lang="ts">
import { ref, onMounted, watch } from 'vue'

interface Map {
  listViewIcon: string
  displayName: string
  narrativeDescription: string
  splash: string
}

const maps = ref<Map[]>([])
const currentMap = ref<Map | null>(maps.value[0])

const fetchAgent = async () => {
  try {
    const response = await fetch('https://valorant-api.com/v1/maps')
    const { data } = await response.json()
    maps.value = data
  } catch (error) {
    console.error('Ошибка:', error)
  }
}

const nextMap = () => {
  const currentIndex = maps.value.findIndex((map) => map === currentMap.value)
  if (currentIndex < maps.value.length - 1) {
    currentMap.value = maps.value[currentIndex + 1]
  }
}

const prevMap = () => {
  const currentIndex = maps.value.findIndex((map) => map === currentMap.value)
  if (currentIndex < maps.value.length - 1) {
    currentMap.value = maps.value[currentIndex - 1]
  }
}

onMounted(async () => {
  await fetchAgent()
})

watch(maps, () => {
  currentMap.value = maps.value[0]
})
</script>

<template>
  <div class="image-container">
    <h2 class="title"><span>MAPS</span></h2>
    <div class="main-container">
      <div class="image-wrapper">
        <img v-if="currentMap" :src="currentMap?.splash" alt="Map image" />
      </div>
      <div class="description-container">
        <div class="description-name">{{ currentMap?.displayName }}</div>
        <div class="description">{{ currentMap?.narrativeDescription }}</div>
        <button class="back-button" @click="prevMap">Назад</button>
        <button class="next-button" @click="nextMap">Вперед</button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.image-container {
  width: 90%;
  margin: 0 auto;
}
.main-container {
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 20px;
  margin-bottom: 40px;
  justify-content: flex-start;
  color: azure;
}
.title {
  top: 0;
  z-index: 10;
  font-size: 30px;
  margin-bottom: 20px;
  color: azure;
}
.image-wrapper {
  width: 700px;
  height: 300px;
  overflow: hidden;
  margin-right: 20px;
}
img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.description-container {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  flex-grow: 1;
}
.description-name {
  font-size: 30px;
  margin-bottom: 20px;
}
.description {
  font-size: 18px;
  width: 700px;
}

.back-button,
.next-button {
  
  margin-top: 20px;
  width: 150px;
  border-radius: 15px;
  border: none;
}
</style>
