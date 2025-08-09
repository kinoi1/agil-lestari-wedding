import { createRouter, createWebHistory } from 'vue-router'
import Home from '../pages/Home.vue'
import HomeBook from '../pages/HomeBook.vue'

const routes = [
  { path: '/flip', name: 'Home', component: Home },
  { path: '/', name: 'About', component: HomeBook },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
