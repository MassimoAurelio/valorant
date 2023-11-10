<script setup lang="ts">
import DropdownMenuItem from './DropDownMenuItem.vue'
import LeftHeaderContent from './LeftHeaderContent.vue'
import RightContent from './RightHeaderContent.vue'
import { useNavigationStore } from '..//..//..//core/stores/counter'

const store = useNavigationStore()
</script>

<template>
  <div class="header-container">
    <LeftHeaderContent />
    <nav class="riotbar-center-content">
      <div class="riotbar-desktop-navigation-wrapper">
        <DropdownMenuItem>
          <div class="desktop-link-item" role="button" aria-haspopup="true" aria-expanded="false">
            <p>GAME INFO</p>
          </div>
          <template #menu>
            <router-link
              v-for="link in store.links"
              :key="link.title"
              :to="link.destination"
              class="link"
            >
              <div class="router-link-content">{{ link.title }}</div>
            </router-link>
          </template>
        </DropdownMenuItem>
        <div class="desktop-link-item">
          <p>MEDIA</p>
          <div class="desktop-link-item-underline"></div>
        </div>
        <div class="desktop-link-item">
          <p>NEWS</p>
          <div class="desktop-link-item-underline"></div>
        </div>
        <div class="desktop-link-item">
          <p>LEADERBOARDS</p>
          <div class="desktop-link-item-underline"></div>
        </div>
        <div class="desktop-link-item">
          <p>SUPPORT</p>
          <div class="desktop-link-item-underline"></div>
        </div>
        <div class="desktop-link-item">
          <p>ESPORTS</p>
          <div class="desktop-link-item-underline"></div>
        </div>
      </div>
    </nav>
    <RightContent />
  </div>
</template>

<style scoped>
.header-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem;
  background: #111111;
  color: white;
  font-weight: 500;
  height: 20px;
}

.riotbar-left-content,
.riotbar-center-content {
  display: flex;
  flex-direction: row;
  align-items: stretch;
}
.riotbar-center-content .logo,
.riotbar-center-content .riotbar-desktop-navigation-wrapper {
  display: flex;
}

.riotbar-center-content {
  width: 100%;
  margin-left: 2%;
}

p {
  padding: 0.5rem 1rem;
  margin-right: 0.25rem;
  text-align: center;
}

p:hover {
  display: flex;
  background-color: #2b2a29;
  transition: background-color 0.1s ease-in-out;
  border-radius: 0.5rem;
}

.desktop-link-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
}

.desktop-link-item-underline {
  height: 4px;
  width: 100%;
  border-radius: 10px;
  background-color: #ff4655;
  opacity: 0;
  transition: opacity 0.3s ease;
}
.desktop-link-item:hover .desktop-link-item-underline {
  opacity: 1;
}

.router-link-content {
  color: #c7c7c7;
  text-decoration: none;
  margin-bottom: 10px;
}

.router-link-content:hover {
  display: flex;

  background-color: #615f5e;
  transition: background-color 0.1s ease-in-out;
  border-radius: 0.5rem;
}
.router-link-content a {
  text-decoration: none !important;
}

.dropdown-menu-item a {
  text-decoration: none;
}
</style>
../../../features/core/stores/counter
