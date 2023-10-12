<script setup lang="ts"></script>

<template>
  <div class="special-abilities-video">
    <div class="first-skill-video">
      <video preload="true" autoplay muted loop data-testid="abilities:video">
        <source
          src="https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt2c46e5d7a51be140/5ecad7f552c5395e0f2dd0de/Jett_Q_v001_web.mp4"
          type="video/mp4"
        />
      </video>
    </div>
    <div class="second-skill-video">
      <video preload="true" autoplay muted loop data-testid="abilities:video">
        <source
          src="https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt063b1d451ace55f4/639367e93b5f412f83e8db36/Jett_E_rework_web.mp4"
          type="video/mp4"
        />
      </video>
    </div>
    <div class="third-skill-video">
      <video preload="true" autoplay muted loop data-testid="abilities:video">
        <source
          src="https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/bltb15019d03f48b8c3/5ecad7f7beb6c333c3a0f59d/Jett_C_v001_web.mp4"
          type="video/mp4"
        />
      </video>
    </div>
    <div class="fourth-skill-video">
      <video preload="true" autoplay muted loop data-testid="abilities:video">
        <source
          src="https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/blta43d8d506e2f5e00/5ecad7f6957e405e0990574d/Jett_X_v001_web.mp4"
          type="video/mp4"
        />
      </video>
    </div>
  </div>
</template>

<style scoped>
.special-abilities-video {
  width: 500px;
  margin-top: -15%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-left: 35px;
}

.first-skill-video video,
.second-skill-video video,
.third-skill-video video,
.fourth-skill-video video {
  width: 100%;
  height: 100%;
}

.first-skill-video,
.second-skill-video,
.third-skill-video,
.fourth-skill-video {
  padding-bottom: 25%;
}
</style>
