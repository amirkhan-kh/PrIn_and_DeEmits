import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/home.vue'
import About from '../views/about.vue'
import Contact from '../views/contact.vue'
import Service from '../views/service.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
  },
  {
    path: '/contact',
    name: 'contact',
    component: Contact,
  },
  {
    path: '/service',
    name: 'service',
    component: Service,
  },
  {
    path: '/about',
    name: 'about',
    component: About,
  },
]
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router
