<script setup lang="ts">
import { ref, onMounted } from 'vue'
import ArsenalDropDownMenu from './ArsenalDropDownMenu.vue'
import SkinDropDownMenu from './SkinDropDownMenu.vue'

interface Guns {
  displayIcon: string
  displayName: string
  categoryText: string
  shopData: Description[]
  weaponStats: Stats[]
  skins: Skins[]
  
}

interface Description {
  category: string
}

interface Stats {
  fireRate: Number
  firstBulletAccuracy: Number
  magazineSize: Number
  reloadTimeSeconds: Number
  runSpeedMultiplier: Number
  shotgunPelletCount: Number
}

interface Skins {
  displayName: string
  displayIcon: string
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
        <span class="first-span"
          >CHOOSE YOUR <br />
          WEAPON</span
        >
        <ArsenalDropDownMenu />
        <SkinDropDownMenu />
      </div>
      <div class="weaponList">
        <div class="weaponBlock" v-for="(weapon, index) in guns" :key="index">
          <div class="weaponBlockValue">
            <div class="weaponName">{{ weapon?.displayName }}</div>
            <img class="weaponImg" :src="weapon?.displayIcon" alt="" />
            <p class="weaponSummaryCard">{{ weapon?.shopData?.category }}</p>
            <p class="weaponSummaryCard">Fire range: {{ weapon?.weaponStats?.fireRate }}</p>
            <p class="weaponSummaryCard">
              First Bullet Accuracy: {{ weapon?.weaponStats?.firstBulletAccuracy }}
            </p>
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
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 20px;
}

.weaponList {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  width: 100%;
  margin-top: 100px;
}

.weaponBlock {
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 600px;
  margin-bottom: 30px;
  text-transform: uppercase;
  border: 2px solid #000;
  box-sizing: border-box;
  padding: 10px;
  margin: 10px;
}

.weaponBlockValue {
  padding: 50px;
}

.weaponImg {
  width: 100%;
  height: 300px;
  object-fit: contain;
}
.weaponName {
  font-size: 2rem;
  font-weight: 800;
  color: #0f1923;
  font-family: 'Tungsten-Bold', arial, georgia, sans-serif;
  margin-bottom: 20px;
}

.first-span {
  display: flex;
  flex-direction: column;
  font-size: 3rem;
  font-weight: 800;
  color: #0f1923;
  font-family: 'Tungsten-Bold', arial, georgia, sans-serif;
}
</style>
