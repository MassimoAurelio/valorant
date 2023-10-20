<script setup lang="ts">
import DropdownMenuItem from '../DropDownMenuItem.vue'
import LeftHeaderContent from './LeftHeaderContent.vue'
import RightContent from './RightHeaderContent.vue'
</script>

<template>
  <div class="header-container">
    <LeftHeaderContent />
    <nav class="riotbar-center-content">
      <div class="riotbar-desktop-navigation-wrapper">
        <DropdownMenuItem>
          <div class="desktop-link-item" role="button" aria-haspopup="true" aria-expanded="false">
            <p>ОБ ИГРЕ</p>
          </div>
          <template #menu>
            <router-link to="/agents/jett" class="agents">
              <div class="router-link-content">АГЕНТЫ</div>
            </router-link>

            <router-link to="/maps" class="maps">
              <div class="router-link-content">КАРТЫ</div></router-link
            >
            <router-link to="/guns" class="arsenal">
              <div class="router-link-content">АРСЕНАЛ</div></router-link
            >
          </template>
        </DropdownMenuItem>
        <div class="desktop-link-item">
          <p>МЕДИА</p>
          <div class="desktop-link-item-underline"></div>
        </div>
        <div class="desktop-link-item">
          <p>НОВОСТИ</p>
          <div class="desktop-link-item-underline"></div>
        </div>
        <div class="desktop-link-item">
          <p>ТАБЛИЦА ЛИДЕРОВ</p>
          <div class="desktop-link-item-underline"></div>
        </div>
        <div class="desktop-link-item">
          <p>ПОДДЕРЖКА</p>
          <div class="desktop-link-item-underline"></div>
        </div>
        <div class="desktop-link-item">
          <p>КИБЕРСПОРТ</p>
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
  padding: 32px;
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
  margin-left: 10%;
}

p {
  padding: 7.5px 16px;
  text-align: center;
  margin-right: 4px;
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
