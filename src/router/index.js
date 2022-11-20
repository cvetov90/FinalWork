// import { productCard } from '@/models/productCard'
import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import СonfiguratorView from '../views/СonfiguratorView.vue'
import productCardFullView from '../views/ProductCardFullView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/configurator',
    name: 'configurator',
    component: СonfiguratorView
  },
  {
    path: '/catalog/:id',
    name: 'CatalogProductCard',
    component: productCardFullView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
