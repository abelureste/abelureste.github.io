import { createWebHashHistory, createRouter } from "vue-router"

import Home from "../components/Home.vue"
import Error from "@/components/Error.vue"
import post001 from "@/components/posts/P001.vue"
import post002 from "@/components/posts/P002.vue"
import post003 from "@/components/posts/P003.vue"
import post00x from "@/components/posts/P00x.vue"

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/:pathMatch(.*)*', name: 'Error', component: Error},
  { path: '/post-001', name: 'P001', component: post001},
  { path: '/post-002', name: 'P002', component: post002},
  { path: '/post-003', name: 'P003', component: post003},
  { path: '/post-00x', name: 'P00x', component: post00x},
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router