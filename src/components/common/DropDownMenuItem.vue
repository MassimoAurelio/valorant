<script setup lang="ts">
import { ref } from 'vue'

const menuIsVisible = ref(false)

const menuMouseOver = () => {
  menuIsVisible.value = true
}

const menuMouseLeave = () => {
  menuIsVisible.value = false
}
</script>

<template>
  <div
    class="dropdown-menu-item"
    data-role="menu-item"
    @mouseover="menuMouseOver()"
    @mouseleave="menuMouseLeave()"
  >
    <a><slot></slot></a>
    <div class="desktop-link-item-underline" style="">
      <div v-show="menuIsVisible" class="dropdown-menu">
        <slot name="menu"></slot>
      </div>
    </div>
  </div>
</template>

<style scoped>
.dropdown-menu-item {
  position: relative;
}

.dropdown-menu {
  position: absolute;
  top: 100%;
  z-index: 1;
  background-color: rgb(41, 41, 41);
  min-height: 100%;
  min-width: 100%;
  padding: 10%;
}

.desktop-link-item-underline {
  height: 4px;
  width: 120%;
  background-color: #ff4655;
  opacity: 0;
  transition: opacity 0.3s ease;
  border-radius: 2px 2px 0 0;
}

.dropdown-menu-item:hover .desktop-link-item-underline {
  opacity: 1;
}
</style>
