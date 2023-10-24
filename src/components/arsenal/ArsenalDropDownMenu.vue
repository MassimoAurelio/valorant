<script setup lang="ts">
import DropdownMenuItem from '../common/DropDownMenuItem.vue'
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
        <router-link to="/guns/heavy" class="arsenal">
          <div class="router-link-content">HEAVY</div>
        </router-link>

        <router-link to="/guns/rifle" class="arsenal">
          <div class="router-link-content">RIFLE</div></router-link
        >
        <router-link to="/guns/shotgun" class="arsenal">
          <div class="router-link-content">SHOTGUN</div></router-link
        >
        <router-link to="/guns/sidearm" class="arsenal">
          <div class="router-link-content">SIDEARM</div></router-link
        >
        <router-link to="/guns/sniper" class="arsenal">
          <div class="router-link-content">SNIPER</div></router-link
        >
        <router-link to="/guns/smg" class="arsenal">
          <div class="router-link-content">SMG</div></router-link
        >
        <router-link to="/guns/meele" class="arsenal">
          <div class="router-link-content">MELEE</div></router-link
        >
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
