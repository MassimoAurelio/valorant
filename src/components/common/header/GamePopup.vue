<script setup lang="ts">
import { ref } from 'vue'

let isOpen = ref(true)

const closePopup = () => {
  isOpen.value = false
}
</script>

<template>
  <div class="main-container" v-if="isOpen">
    <div class="popup-container">
      <div class="close-button">
        <button class="close" @click="closePopup">
          <span> <img src="../../../assets/img/close.svg" alt="" /></span>
        </button>
      </div>
      <div class="main-value">
        <div class="heading-bold">
          <span class="slesh-leviy">\</span>
          <h3>ПРИГОТОВЬСЯ К ИГРЕ</h3>
          <span class="slesh-praviy">\</span>
        </div>
        <div class="create-button">
          <div class="left-button">
            <span class="span-nad-cnopkoy">У меня еще нету аккаунта Riot</span>
            <button class="create">
              <span>Create</span>
            </button>
          </div>
          <div class="right-button">
            <div class="auth-button">
              <span class="span-nad-cnopkoy">У меня уже есть аккаунт Riot</span>
              <button class="auth">
                <span>Authorization</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.main-container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(136, 136, 204, 0.5);
  z-index: 4444;
  display: flex;
  justify-content: center;
  align-items: center;
}
.popup-container {
  position: relative;
  height: 400px;
  width: 1300px;
  background-color: #0f1923;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  position: relative;
  padding: 20px;
  box-sizing: border-box;
  flex-direction: column;
  border-top: 1px solid gray;
  border-bottom: 1px solid gray;
}
.close-button {
  align-self: flex-end;
}
.buttons-container {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-grow: 1;
}
.main-value {
  width: 100%;
  height: 300px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.create-button {
  display: flex;
  flex-direction: row;
}

.create,
.auth {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 200px;
  font-size: 17px;
  height: 50px;
}
.create {
  background-size: 200% auto;
  background-image: linear-gradient(to left, #ffffff 50%, #0f1923 50%);
  transition: background-position 0.3s;
  border: none;
  color: azure;
  font-weight: 700;
  font-family: 'Oswald', 'sans-serif';
  cursor: pointer;
  background-position: right center;
  color: #0f1923;
  margin-right: 20px;
}

.create:hover {
  background-position: left center;
  color: #ffffff;
  border: 1px solid gray;
}
.auth {
  position: relative;
  background-size: 200% auto;
  background-image: linear-gradient(to left, #ff4655 50%, #0f1923 50%);
  transition: background-position 0.3s;
  border: none;
  color: azure;
  font-weight: 700;
  font-family: 'Oswald', 'sans-serif';
  cursor: pointer;
  background-position: right center;
  color: #ffffff;
  margin-left: 20px;
}

.auth:hover {
  background-position: left center;
  color: #ffffff;
  border: 1px solid #ff4655;
}

.slesh-praviy {
  margin-left: 15px;
}
.slesh-leviy {
  margin-right: 15px;
}

.heading-bold,
.text {
  color: azure;
  font-family: 'Oswald', sans-serif;
  font-weight: 700;
  margin-bottom: 70px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 100px;
}
.span-nad-cnopkoy {
  font-size: 13px;
  font-weight: 300;
  margin-bottom: 10px;
}

.auth-button {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.left-button {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
