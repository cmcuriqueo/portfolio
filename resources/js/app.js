require('./bootstrap');
import { createApp } from 'vue'
import routes from './routes.js';

import App  from  './components/App'



const app = createApp(App)


app.use(routes)
app.mount('#app')