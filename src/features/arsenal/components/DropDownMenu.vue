<script setup lang="ts">
import DropdownMenuItem from '..//..//header/components/DropDownMenuItem.vue'

const props = defineProps({
  spanText: {
    type: String,
    required: true
  },
  types: {
    type: Array as () => string[],
    required: true
  },
  linkRoute: {
    type: String,
    required: true
  }
})


</script>

<template>
  <div>
    <DropdownMenuItem>
      <div class="Dropdown">
        <span class="second-span">{{ spanText }}</span>
        <div class="drop-down-icon"></div>
      </div>
      <template #menu>
        <router-link to="/guns/" class="arsenal" v-if="spanText === 'All WEAPONS'">
          <div class="router-link-content">ALL WEAPONS</div>
        </router-link>
        <router-link v-for="type in types" :key="type" :to="`${linkRoute}${type}`" class="arsenal">
          <div class="router-link-content">{{ type.toUpperCase() }}</div>
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
