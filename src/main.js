import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import GlobalInput from './components/Global/GlobalInput.vue'
import GlobalButton from './components/Global/GlobalButton.vue'
import Fillters from './components/Fillters.vue'
import './assets/main.css'
import router from './router'



const app = createApp(App)

app.use(createPinia())
app.use(router)
app.component('GlobalInput', GlobalInput) // registrar como global
app.component('GlobalButton', GlobalButton) // msm coisa
app.component('Fillters', Fillters) // msm coisa
app.mount('#app')

