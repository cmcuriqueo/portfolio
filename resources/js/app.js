require('./bootstrap');
import { createApp, h} from 'vue'
import routes from './routes.js';

import App  from  './components/App'



const app = createApp({
    render: ()=>h(App)
})


app.use(routes)
app.mount('#app')