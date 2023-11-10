<script setup lang="ts">
import { ref, onMounted, computed } from 'vue'
import { useMapsStore } from '../../stores/counter'

const mapsStore = useMapsStore()

onMounted(() => {
  mapsStore.fetchMaps()
})

const currentMapIndex = ref<number>(0)

const nextMap = () => {
  if (currentMapIndex.value < mapsStore.map.length - 1) {
    currentMapIndex.value++
  }
}

const prevMap = () => {
  if (currentMapIndex.value > 0) {
    currentMapIndex.value--
  }
}

const isFirstMap = computed(() => currentMapIndex.value === 0)
const isLastMap = computed(() => currentMapIndex.value === mapsStore.map.length - 1)
</script>

<template>
  <div class="image-container">
    <h2 class="title"><span>MAPS</span></h2>
    <div v-if="mapsStore.loading">
      <span>Loading maps data...</span>
    </div>
    <div v-if="mapsStore.error">
      <span>Oops, something went wrong...</span>
    </div>
    <div class="main-container" v-else-if="!mapsStore.loading">
      <div class="image-wrapper">
        <img
          v-if="mapsStore.map.length"
          v-lazy="mapsStore.map[currentMapIndex]?.splash"
          alt="Map image"
        />
      </div>
      <div class="description-container">
        <div class="description-name">{{ mapsStore.map[currentMapIndex]?.displayName }}</div>
        <div class="description">
          {{ mapsStore.map[currentMapIndex]?.narrativeDescription }}
        </div>
        <button class="next-button" @click="nextMap" v-if="!isLastMap">Forward</button>
        <button class="back-button" @click="prevMap" v-if="!isFirstMap">Back</button>
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
  margin-bottom: 40px;
  justify-content: flex-start;
  color: #0f1923;
}
.title {
  top: 0;
  z-index: 10;
  font-size: 3rem;
  font-weight: 800;
  color: #0f1923;
  margin-bottom: 20px;
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
  width: 100%;
  height: 100%;
}
.description-name {
  font-size: 30px;
  margin-bottom: 20px;
}
.description {
  font-size: 18px;
  width: 700px;
  min-height: 100px;
}

.back-button,
.next-button {
  width: 200px;
  height: 30px;
  position: relative;
  background-size: 200% auto;
  background-image: linear-gradient(to left, #0f1923 50%, #142331 50%);
  transition: background-position 0.3s;
  border: none;
  color: azure;
  font-weight: 700;
  font-family: 'Oswald', 'sans-serif';
  cursor: pointer;
  background-position: right center;
  color: #ffffff;
  margin-bottom: 10px;
}

.back-button:hover,
.next-button:hover {
  background-position: left center;
  color: #ffffff;
  border: 1px solid #ff4655;
}
</style>
