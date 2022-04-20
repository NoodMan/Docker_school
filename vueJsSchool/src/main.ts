import { createApp } from 'vue'
import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import App from './App.vue'
import router from './router'


const pinia = createPinia(); //création de la constante
const app = createApp(App)

pinia.use(piniaPluginPersistedstate); //pour utiliser le plugin

app.use(createPinia())
app.use(pinia)
app.use(router)

app.mount('#app')
