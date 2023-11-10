<script setup lang="ts">
import logo from '@/assets/img/logo.svg'
</script>

<template>
  <div class="riotbar-left-content">
    <router-link to="/" class="home">
      <span class="logo">
        <img v-lazy="logo" alt="Logo" class="my-img" />
      </span>
    </router-link>
  </div>
</template>

<style scoped>
.my-img {
  display: flex;
  align-items: center;
  height: 45px;
  width: 45px;
}
</style>
