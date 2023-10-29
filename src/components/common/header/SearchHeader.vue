<script setup lang="ts">
import { ref, onMounted, nextTick } from 'vue'

const searchTerm = ref('')
const expanded = ref(false)
const searchInput = ref(null)

const openSearch = () => {
  expanded.value = true
  nextTick(() => {
    searchInput.value.focus()
  })
}

const closeSearch = () => {
  expanded.value = false
  searchTerm.value = ''
}

onMounted(() => {
  nextTick(() => {
    searchInput.value.focus()
  })
})
</script>

<template>
  <div class="riotbar-search-container">
    <div class="container">
      <img
        src="../../../assets/img/search.svg"
        alt="Поиск"
        @click="openSearch"
        class="search-img"
      />
      <input
        v-show="expanded"
        v-model="searchTerm"
        class="search-input"
        @blur="closeSearch"
        ref="searchInput"
      />
      <div v-show="expanded" class="close">
        <img src="../../../assets/img/close.svg" alt="" @click="closeSearch" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 12px;
  height: 40px;
  min-width: 10px;
  max-width: 500px;
  overflow: hidden;
  background-color: #2b2a29;
  transition: all 0.3s ease-in-out;
  border-radius: 1.1rem;
}

.search-input {
  height: 25px;
  flex-grow: 1;
  background-color: #2b2a29;
  color: #fff;
  border: none;
  width: 100%;
}

.search-input:focus {
  outline: none;
}

.close {
  cursor: pointer;
  display: flex;
  align-items: center;
  padding-left: 5px;
}

.fade-enter-active,
.fade-leave-active {
  transition:
    opacity 0.5s,
    width 0.5s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
  width: 0 !important;
}

.search-img {
  cursor: pointer;
  padding-right: 5px;
}

.riotbar-search-container {
  display: flex;
  justify-content: flex-end;
  align-items: center;
}
</style>
