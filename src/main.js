import { createApp } from 'vue'
import App from './App.vue'
import '@/style/base.scss'
import router from './router'
import {createPinia} from "pinia";
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'

//暗黑主题
import 'element-plus/theme-chalk/dark/css-vars.css'

import svgIcon from "@/components/SvgIcon/index.vue";
import 'virtual:svg-icons-register'






const pinia=createPinia()
pinia.use(piniaPluginPersistedstate)

const app=createApp(App)
app.use(router)
app.use(pinia)
app.component('svg-icon', svgIcon)
app.mount('#app')
