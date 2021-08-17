require('./bootstrap');
import { createApp } from 'vue'
import router from './routes.js';

import App  from  './components/App'

const app = createApp(App)


app.use(router)
app.mount('#app')