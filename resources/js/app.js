import './bootstrap';
import { createApp } from 'vue';
import { createWebHistory, createRouter } from 'vue-router';

import store from './base.js';
import global_fn from './global_fn.js';

import { routes } from '~pages/routes.js';

import WelcomeComponent from '~pages/home.vue'

const router = new createRouter({
    history: createWebHistory(),
    linkExactActiveClass: 'is-active',
    routes
});
const app = createApp({
    template: '<WelcomeComponent/>',
    components: { WelcomeComponent }
});

app.use(global_fn);
app.use(store);
app.use(router);

app.mount('#content');
