<script setup lang="ts">
import { ref, onMounted } from 'vue'

interface Map {
  listViewIcon: string
  displayName: string
  narrativeDescription: string
}

const maps = ref<Map[]>([])

const fetchAgent = async () => {
  try {
    const response = await fetch('https://valorant-api.com/v1/maps')
    const { data } = await response.json()
    maps.value = data
  } catch (error) {
    console.error('Ошибка:', error)
  }
}

onMounted(async () => {
  await fetchAgent()
})
</script>

<template>
  <div class="image-container">
    <h2 class="title"><span>MAPS</span></h2>
    <div class="main-container" v-for="(map, index) in maps" :key="index">
      <div class="image-wrapper">
        <img :src="map?.splash" alt="Map image" />
      </div>
      <div class="description-container">
        <div class="description-name">{{ map?.displayName }}</div>
        <div class="description">{{ map?.narrativeDescription }}</div>
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
</style>
