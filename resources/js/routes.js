
import {createRouter, createWebHashHistory} from 'vue-router';



var Contacto = require('./components/Contacto');
var AcercaDeMi = require('./components/AcercaDeMi');

let routes = [
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