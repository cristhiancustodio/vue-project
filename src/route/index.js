// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    {
        path: '/bienvenido',
        name: 'bienvenido',
        component: ()=> import("../views/bienvenido.vue")
    },
    {
        path: '/iteracion',
        name: 'inicio',
        component: ()=> import("../views/iteracion.vue")
    },
    {
        path: '/home',
        name: 'Home',
        component: ()=> import("../views/Home.vue")
    },
    {
        path: '/about',
        name: 'About',
        component: ()=> import("../views/About.vue")
    },
    {
        path: '/empresas',
        name: 'Empresa',
        component: ()=> import("../views/Empresa.vue")
    },
    {
        path: '/empresas/:nombre',
        name: 'Empresa2',
        component: ()=> import("../views/Empresa.vue")
    }
]

const router = createRouter({
    history: createWebHistory(import.meta.env.VITE_BASE_URL),
    routes
})

export default router
