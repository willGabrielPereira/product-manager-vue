import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import api from './js/api'

api.get('/routes').then(r => {
    console.log(r)
}).catch(err => {
    console.error('Houve um erro', err)
})

const app = createApp(App)

app.use(router)

app.mount('#app')
