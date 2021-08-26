import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import productlist from '../components/productlist.vue'
import products from '../components/products.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/home',
    name: 'Home',
    component: Home,
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/About.vue'),
  },
  {
    path: '/productlist',
    name: 'productlist',
    component: productlist,
  },
  {
    path: '/',
    name: 'products',
    component: products,
  },
]

const router = new VueRouter({
  routes,
})

export default router
