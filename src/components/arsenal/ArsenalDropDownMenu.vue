<script setup lang="ts">
import DropdownMenuItem from '../common/DropDownMenuItem.vue'

const weaponClass = ['heavy', 'rifle', 'shotgun', 'sidearm', 'sniper', 'smg', 'meele']
</script>

<template>
  <div>
    <DropdownMenuItem>
      <div class="Dropdown">
        <span class="second-span">All WEAPONS</span>
        <div class="drop-down-icon"></div>
      </div>
      <template #menu>
        <router-link to="/guns/" class="arsenal">
          <div class="router-link-content">ALL WEAPONS</div>
        </router-link>
        <router-link v-for="weap in weaponClass" :key="weap" :to="'/guns/' + weap" class="arsenal">
          <div class="router-link-content">{{ weap.toUpperCase() }}</div>
        </router-link>
      </template>
    </DropdownMenuItem>
  </div>
</template>

<style scoped>
.Dropdown {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}
.router-link-content {
  text-decoration: none !important;
}

.second-span {
  display: flex;
  flex-direction: column;
  font-size: 1.5rem;
  font-weight: 800;
  color: #0f1923;
  font-family: 'Tungsten-Bold', arial, georgia, sans-serif;
  cursor: pointer;
}

.arsenal {
  color: azure;
  text-decoration: none !important;
}

.arsenal:visited {
  text-decoration: none !important;
}

.arsenal:hover {
  text-decoration: none !important;
}

.arsenal:focus {
  text-decoration: none !important;
}
</style>
