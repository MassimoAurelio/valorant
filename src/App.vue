<script setup lang="ts">
import Header from './components/AppHeader.vue'
import MainPage from './components/MainPage.vue'
</script>

<template>
  <header>
    <Header />
    <router-view></router-view>
  </header>
</template>

<style scoped></style>
