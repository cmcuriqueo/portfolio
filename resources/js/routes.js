import VueRouter from 'vue-router';

var Home = require('./components/Home');

let routes = [
    {
        path: '/home',
        name: 'home',
        component: Home,
    }];


export default new VueRouter({
    mode: 'hash',
    routes,
    linkActiveClass: 'is-active'
});