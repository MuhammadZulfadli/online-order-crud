import Vue from 'vue'
import VueRouter from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
// import Customer from '@/components/customer'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/customer',
    name: 'Customer',
    component: () =>
      import(/* webpackChunkName: "premiere" */ '../views/Customer.vue')
  },
  {
    path: '/driver',
    name: 'Driver',
    component: () =>
      import(/* webpackChunkName: "premiere" */ '../views/Driver.vue')
  },
  {
    path: '/product',
    name: 'Product',
    component: () =>
      import(/* webpackChunkName: "premiere" */ '../views/Product.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
