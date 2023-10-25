<script setup lang="ts">
import { ref, watchEffect } from 'vue'
import { useRoute } from 'vue-router'
import ArsenalDropDownMenu from '../arsenal/ArsenalDropDownMenu.vue'
import SkinDropDownMenu from './SkinDropDownMenu.vue'
interface Skins {
  displayIcon: string
  displayName: string
}

let route = useRoute()
const skins = ref<Skins[]>([])

const fetchSkins = async () => {
  try {
    const response = await fetch('https://valorant-api.com/v1/weapons/skins')
    const { data } = await response.json()
    skins.value = data.filter((skin: Skins) => skin.displayName.includes(route.params.skinClass))
  } catch (error) {
    console.error('Ошибка:', error)
  }
}

watchEffect(() => {
  fetchSkins()
})
</script>

<template>
  <section>
    <div class="main-container">
      <div class="title">
        <span class="first-span">CHOOSE YOUR <br />WEAPON</span>
        <ArsenalDropDownMenu />
        <SkinDropDownMenu />
      </div>
      <div class="weaponList">
        <div class="weaponBlock" v-for="(weapon, index) in skins" :key="index">
          <div class="weaponBlockValue">
            <div class="weaponName">{{ weapon?.displayName }}</div>
            <img class="weaponImg" :src="weapon?.displayIcon" alt="" />
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
