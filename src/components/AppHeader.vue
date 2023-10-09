<script setup lang="ts">
import DropdownMenuItem from './DropDownMenuItem.vue'
</script>

<template>
  <div class="header-container">
    <div class="riotbar-left-content"></div>
    <nav class="riotbar-center-content">
      <div class="riotbar-desktop-navigation-wrapper">
        <DropdownMenuItem>
          <div class="desktop-link-item" role="button" aria-haspopup="true" aria-expanded="false">
            <p>ОБ ИГРЕ</p>
          </div>
          <template #menu>
            <router-link to="/agents" class="agents">
              <div class="router-link-content">АГЕНТЫ</div>
            </router-link>

            <router-link to="/maps" class="maps">
              <div class="router-link-content">КАРТЫ</div></router-link
            >
            <router-link to="/arsenal" class="arsenal">
              <div class="router-link-content">АРСЕНАЛ</div></router-link
            >
          </template>
        </DropdownMenuItem>
        <div class="desktop-link-item">
          <p>МЕДИА</p>
          <div class="desktop-link-item-underline" style=""></div>
        </div>
        <div class="desktop-link-item">
          <p>НОВОСТИ</p>
          <div class="desktop-link-item-underline" style=""></div>
        </div>
        <div class="desktop-link-item">
          <p>ТАБЛИЦА ЛИДЕРОВ</p>
          <div class="desktop-link-item-underline" style=""></div>
        </div>
        <div class="desktop-link-item">
          <p>ПОДДЕРЖКА</p>
          <div class="desktop-link-item-underline" style=""></div>
        </div>
        <div class="desktop-link-item">
          <p>КИБЕРСПОРТ</p>
          <div class="desktop-link-item-underline" style=""></div>
        </div>
      </div>
    </nav>
    <div class="riotbar-right-content">
      <div class="riotbar-search-container">
        <img src="../assets/img/search.svg" alt="" />
      </div>
      <div class="riotbar-locale-switcher">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="locale-switcher"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          style="fill: rgba(255, 255, 255, 1); transform:; msfilter:; padding: 0 10"
        >
          <path
            d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zM4 12c0-.899.156-1.762.431-2.569L6 11l2 2v2l2 2 1 1v1.931C7.061 19.436 4 16.072 4 12zm14.33 4.873C17.677 16.347 16.687 16 16 16v-1a2 2 0 0 0-2-2h-4v-3a2 2 0 0 0 2-2V7h1a2 2 0 0 0 2-2v-.411C17.928 5.778 20 8.65 20 12a7.947 7.947 0 0 1-1.67 4.873z"
          ></path>
        </svg>
      </div>
      <div class="riotbar-account-container">
        <div class="riotbar-account-anonymous-link-wrapper">
          <span class="button-game">ИГРАТЬ</span>
        </div>
      </div>
    </div>
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
.riotbar-right-content,
.riotbar-center-content {
  display: flex;
  align-items: center;
}
.riotbar-center-content .logo,
.riotbar-center-content .riotbar-desktop-navigation-wrapper {
  display: flex;
}

.riotbar-desktop-navigation-wrapper .desktop-link-item {
  display: flex;
  margin: 0 20px;
  padding: 7.5px 16px;
  text-align: center;
  margin-right: 4px;
  cursor: pointer;
}

.riotbar-right-content .riotbar-search-container,
.riotbar-right-content .riotbar-locale-switcher,
.riotbar-right-content .riotbar-account-container {
  display: flex;
  align-items: center;
  cursor: pointer;
}

.button-game {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 2px;
}

.riotbar-account-anonymous-link-wrapper {
  background: linear-gradient(
    135deg,
    rgb(255, 51, 66) 0%,
    rgb(255, 48, 64) 0.01%,
    rgb(255, 125, 102) 100%
  );
  border-radius: 13px;
  height: 30px;
  width: 80px;
  cursor: pointer;
}
.riotbar-account-anonymous-link-wrapper:hover {
  background: linear-gradient(
    135deg,
    rgb(199, 75, 83) 0%,
    rgb(238, 89, 102) 0.01%,
    rgb(252, 144, 125) 100%
  );
}

.riotbar-search-container {
  display: flex;
  background-color: #2b2a29;
  transition: background-color 0.1s ease-in-out;
  border-radius: 1.1rem;
  padding: 6px 12px;
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
}

.desktop-link-item-underline {
  height: 4px;
  width: 100%;
  border-radius: 10px;
  background-color: #ff4655;
  opacity: 0;
  transition: opacity 0.3s ease;
  margin-top: -10px;
}
.desktop-link-item:hover .desktop-link-item-underline {
  opacity: 1;
}

.router-link-content {
  color: white;
}

.router-link-content:hover {
  color: #ff4655;
}
</style>
