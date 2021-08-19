
import {createRouter, createWebHashHistory} from 'vue-router';



var Contacto = () => import('./components/Contacto');
var Home = () => import('./components/Home');
var AcercaDeMi = () => import('./components/AcercaDeMi');

let routes = [
    {
        path: '/',
        name: 'home',
        component: Home,
    },
    {
        path: '/contacto',
        name: 'contacto',
        component: Contacto,
    },
    {
        path: '/acerca_de_mi',
        name: 'acerca_de_mi',
        component: AcercaDeMi,
    }
];



const router = createRouter({
    // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
    history: createWebHashHistory(),
    routes // short for `routes: routes`
  })
  
export default router