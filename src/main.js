import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import GlobalInput from './components/Global/GlobalInput.vue'
import GlobalButton from './components/Global/GlobalButton.vue'
import Fillters from './components/Fillters.vue'
import Notification from './components/Notification.vue'
import EventCards from './components/EventCards.vue'
import studentNav from './components/studentNav.vue'
import teacherNav from './components/teacherNav.vue'
import './assets/main.css'
import router from './router'

import { library } from "@fortawesome/fontawesome-svg-core";

import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faCoffee, faUser, faCalendar, faBell, faInfo, faSchool, faMap} from "@fortawesome/free-solid-svg-icons";
library.add(faCoffee, faUser, faCalendar, faBell, faInfo, faSchool, faMap);

const app = createApp(App);


app.use(createPinia())
app.use(router)
app.component('studentNav', studentNav)
app.component('EventCards', EventCards) 
app.component('teacherNav', teacherNav)
app.component('Notification', Notification) 
app.component('GlobalInput', GlobalInput) // registrar como global
app.component('GlobalButton', GlobalButton) // msm coisa
app.component('Fillters', Fillters) // msm coisa
app.component("font-awesome-icon", FontAwesomeIcon);
app.mount('#app')

