<script setup lang="ts">
import { ref, onMounted } from 'vue'

interface Guns {
  displayIcon: string
  displayName: string
  categoryText: string
}

const guns = ref<Guns[]>([])

const fetchGuns = async () => {
  try {
    const response = await fetch('https://valorant-api.com/v1/weapons')
    const { data } = await response.json()
    guns.value = data
  } catch (error) {
    console.error('Ошибка:', error)
  }
}

onMounted(async () => {
  fetchGuns()
})
</script>

<template>
  <section>
    <div class="main-container">
      <div class="title">
        <span>Выберите свое оружие</span>
        <div class="Dropdown">
          <span>Все оружие</span>
          <div class="drop-down-icon"></div>
        </div>
      </div>
      <div class="weaponList">
        <div class="weaponBlock" v-for="(weapon, index) in guns" :key="index">
          <div class="weaponBlockValue">
            <div class="weaponName">{{ weapon?.displayName }}</div>
            <img class="weaponImg" :src="weapon?.displayIcon" alt="" />
            <p class="weaponSummaryCard">{{ weapon?.categoryText }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.main-container {
  position: relative;
  padding-left: 7.3%;
  padding-right: 7.3%;
  height: 100vh;
}
.title {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
}

.weaponList {
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 300px;
}

.weaponBlockValue {
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 300px;
}
</style>
