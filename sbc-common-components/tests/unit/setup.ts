import { createVuetify } from "vuetify"
import * as components from "vuetify/components"
import * as directives from "vuetify/directives"
import { createRouter, createWebHistory, Router } from 'vue-router'
import Home from './home_view.vue'

const vuetify = createVuetify({ components, directives });
export default vuetify;

export function createVueRouter (): Router {
const router = createRouter({
    history: createWebHistory(sessionStorage.getItem('VUE_ROUTER_BASE') || ''),
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
          },
    ]})
    return router
}
