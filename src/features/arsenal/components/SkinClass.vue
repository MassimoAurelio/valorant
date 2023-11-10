<script setup lang="ts">
import { watch } from 'vue'
import { useRoute } from 'vue-router'
import type { Skins } from '..//..//typings/interfaces'
import { useWeaponStore } from '..//..//core/stores/counter'
import dropDownMenu from './DropDownMenu.vue'

let route = useRoute()
const weaponStore = useWeaponStore()

const spanTextWeapon = 'All WEAPONS'
const spanTextSkin = 'All SKINS'
const routerGuns = '/guns/'

const routerSkin = '/skins/'

const fetchSkins = async () => {
  try {
    const response = await fetch('https://valorant-api.com/v1/weapons/skins')
    const { data } = await response.json()
    const filteredSkins = data.filter((skin: Skins) =>
      skin.displayName.includes(route.params.skinClass)
    )
    weaponStore.setSkins(filteredSkins)
  } catch (error) {
    console.error('WARNING:', error)
  }
}

watch(
  () => route.params.skinClass,
  () => {
    fetchSkins()
  },
  { immediate: true }
)
</script>

<template>
  <section>
    <div class="main-container">
      <div class="title">
        <span class="first-span">CHOOSE YOUR WEAPON</span>
        <div class="drop-boxs">
          <div class="arsenal-dropdown">
            <dropDownMenu
              :spanText="spanTextWeapon"
              :types="weaponStore.weaponClass"
              :linkRoute="routerGuns"
            />
          </div>
          <div class="skin-dropdown">
            <dropDownMenu
              :spanText="spanTextSkin"
              :types="weaponStore.skinsClass"
              :linkRoute="routerSkin"
            />
          </div>
        </div>
      </div>
      <div class="weaponList">
        <div class="weaponBlock" v-for="skin in weaponStore.skin" :key="skin.uuid">
          <div class="weaponBlockValue">
            <div class="weaponName">{{ skin?.displayName }}</div>
            <img class="weaponImg" v-lazy="skin?.displayIcon" alt="" />
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
  min-height: 500px;
  max-height: 400px;
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
../../features/core/stores/counter../../features/typings/interfaces
