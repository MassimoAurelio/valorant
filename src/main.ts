import { createApp } from 'vue'
import { createPinia } from 'pinia'
import VueLazyload from 'vue-lazyload'

import App from './App.vue'
import router from './features/core/router'
import './features/assets/base.css'

const app = createApp(App)

app.use(createPinia())
app.use(VueLazyload)
app.use(router)

app.mount('#app')
