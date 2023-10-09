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
    <div class="desktop-link-item-underline" style=""></div>
    <div v-show="menuIsVisible" class="dropdown-menu">
      <slot name="menu"></slot>
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
  left: 0;
  z-index: 1;
  background-color: #292929;
  color: #c7c7c7;
  min-height: 100px;
  min-width: 200px;
  padding: 10%;
}

.desktop-link-item-underline {
  height: 4px;
  width: 100%;
  border-radius: 10px;
  background-color: #ff4655;
  opacity: 0;
  transition: opacity 0.3s ease;
  margin-top: -10px;
  border-radius: 2px 2px 0px 0px;
}

.dropdown-menu-item:hover .desktop-link-item-underline {
  opacity: 1;
}
</style>
