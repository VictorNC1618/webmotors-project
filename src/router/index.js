import { createRouter, createWebHistory } from 'vue-router'


import Listing from '../pages/Listing.vue'

const routes = [
    { path: '/', component: Listing },
    { path: '/listing', component: Listing },
]


const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;