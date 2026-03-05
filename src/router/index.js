import { createWebHistory, createRouter } from "vue-router"

import Home from '../components/Home.vue'
import Error from "@/components/Error.vue"
import post001 from "@/components/posts/P001.vue"

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/:pathMatch(.*)*', name: 'Error', component: Error},
  { path: '/post-001', name: 'P001', component: post001},
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router