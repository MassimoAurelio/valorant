<script setup lang="ts">
import { ref, watchEffect } from 'vue'
import { useRoute } from 'vue-router'
import ArsenalDropDownMenu from '../arsenal/ArsenalDropDownMenu.vue'
import SkinDropDownMenu from './SkinDropDownMenu.vue'

interface Guns {
  displayIcon: string
  displayName: string
  categoryText: string
  category: string
}

const route = useRoute()
const guns = ref<Guns[]>([])

const fetchGuns = async () => {
  let weaponClass = `EEquippableCategory::${
    (route.params.weaponClass as string).charAt(0).toUpperCase() +
    (route.params.weaponClass as string).slice(1)
  }`

  const response = await fetch('https://valorant-api.com/v1/weapons/')
  const { data } = await response.json()
  guns.value = data.filter((gun: Guns) => gun.category === weaponClass)
}

watchEffect(() => {
  fetchGuns()
})
</script>

<template>
  <section>
    <div class="main-container">
      <div class="title">
        <span class="first-span">CHOOSE YOUR WEAPON</span>
        <div class="drop-boxs">
          <div class="arsenal-dropdown"><ArsenalDropDownMenu /></div>
          <div class="skin-dropdown"><SkinDropDownMenu /></div>
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
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  margin-top: 20px;
}

.weaponList {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  width: 100%;
}

.drop-boxs {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  margin-left: 440px;
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
  justify-content: space-between;
  font-size: 2rem;
  font-weight: 800;
  color: #0f1923;
  font-family: 'Tungsten-Bold', arial, georgia, sans-serif;
}

.skin-dropdown {
  margin-left: 50px;
}
</style>
