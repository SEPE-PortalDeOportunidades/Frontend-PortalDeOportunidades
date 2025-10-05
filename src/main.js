import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import GlobalInput from './components/Global/GlobalInput.vue'
import GlobalButton from './components/Global/GlobalButton.vue'
import Fillters from './components/Fillters.vue'
import './assets/main.css'
import router from './router'

import { library } from "@fortawesome/fontawesome-svg-core";

import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faCoffee, faUser, faCalendar, faBell, faInfo} from "@fortawesome/free-solid-svg-icons";
library.add(faCoffee, faUser, faCalendar, faBell, faInfo);

const app = createApp(App);


app.use(createPinia())
app.use(router)
app.component('GlobalInput', GlobalInput) // registrar como global
app.component('GlobalButton', GlobalButton) // msm coisa
app.component('Fillters', Fillters) // msm coisa
app.component("font-awesome-icon", FontAwesomeIcon);
app.mount('#app')

