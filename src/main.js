import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'

import './assets/main.css'
import router from './router'

import { library } from '@fortawesome/fontawesome-svg-core'

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import {
  faCoffee,
  faUser,
  faCalendar,
  faBell,
  faInfo,
  faSchool,
  faMap,
} from '@fortawesome/free-solid-svg-icons'
library.add(faCoffee, faUser, faCalendar, faBell, faInfo, faSchool, faMap)

const app = createApp(App)

app.component('font-awesome-icon', FontAwesomeIcon)
app.use(createPinia())
app.use(router)

app.mount('#app')
