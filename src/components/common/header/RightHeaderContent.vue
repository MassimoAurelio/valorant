<script setup lang="ts">
import SearchHeader from './SearchHeader.vue'
import { ref } from 'vue'
import PopupComponent from './GamePopup.vue'

let showPopup = ref(false)

const togglePopup = () => {
  showPopup.value = !showPopup.value
}
</script>

<template>
  <div class="riotbar-right-content">
    <SearchHeader />
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
        <span class="button-game" @click="togglePopup">ИГРАТЬ</span>
      </div>
    </div>
    <PopupComponent
      v-if="showPopup"
      v-model:showPopup="showPopup"
      @update:showPopup="showPopup = $event"
    />
  </div>
</template>

<style scoped>
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

.riotbar-right-content .riotbar-right-content .riotbar-locale-switcher,
.riotbar-right-content .riotbar-account-container {
  display: flex;
  align-items: center;
  cursor: pointer;
}

.riotbar-right-content {
  display: flex;
  flex-direction: row;
  align-items: center;
}

.button-game {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 2px;
}
</style>
