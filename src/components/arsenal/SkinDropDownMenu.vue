<script setup lang="ts">
import DropdownMenuItem from '../common/DropDownMenuItem.vue'
</script>

<template>
  <div>
    <DropdownMenuItem>
      <div class="Dropdown">
        <span class="second-span">All SKINS</span>
        <div class="drop-down-icon"></div>
      </div>
      <template #menu>
        <router-link to="/skins/Odin" class="arsenal">
          <div class="router-link-content">Odin</div>
        </router-link>
        <router-link to="/skins/Ares" class="arsenal">
          <div class="router-link-content">Ares</div>
        </router-link>
        <router-link to="/skins/Vandal" class="arsenal">
          <div class="router-link-content">Vandal</div>
        </router-link>
        <router-link to="/skins/Bulldog" class="arsenal">
          <div class="router-link-content">Bulldog</div>
        </router-link>
        <router-link to="/skins/Phantom" class="arsenal">
          <div class="router-link-content">Phantom</div>
        </router-link>
        <router-link to="/skins/Judge" class="arsenal">
          <div class="router-link-content">Judge</div>
        </router-link>
        <router-link to="/skins/Bucky" class="arsenal">
          <div class="router-link-content">Bucky</div>
        </router-link>
        <router-link to="/skins/Frenzy" class="arsenal">
          <div class="router-link-content">Frenzy</div>
        </router-link>
        <router-link to="/skins/Classic" class="arsenal">
          <div class="router-link-content">Class</div>
        </router-link>
        <router-link to="/skins/Ghost" class="arsenal">
          <div class="router-link-content">Ghost</div>
        </router-link>
        <router-link to="/skins/Sheriff" class="arsenal">
          <div class="router-link-content">Sheriff</div>
        </router-link>
        <router-link to="/skins/Shorty" class="arsenal">
          <div class="router-link-content">Shorty</div>
        </router-link>
        <router-link to="/skins/Operator" class="arsenal">
          <div class="router-link-content">Operator</div>
        </router-link>
        <router-link to="/skins/Guardian" class="arsenal">
          <div class="router-link-content">Guardian</div>
        </router-link>
        <router-link to="/skins/Marshal" class="arsenal">
          <div class="router-link-content">Marshal</div>
        </router-link>
        <router-link to="/skins/Spectre" class="arsenal">
          <div class="router-link-content">Spectre</div>
        </router-link>
        <router-link to="/skins/Stinger" class="arsenal">
          <div class="router-link-content">Stinger</div>
        </router-link>
        <router-link to="/skins/Melee" class="arsenal">
          <div class="router-link-content">Melee</div>
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
