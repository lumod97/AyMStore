import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/Login.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: ()=>{  return import('@/views/Login.vue')}
  },
  {
    path: '/productos',
    name: 'products',
    component: ()=>{ return import('@/views/Productos/Productos.vue') }
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: ()=> { return import(/* webpackChunkName: "about" */ '../views/AboutView.vue') }
  }
]

const router = new VueRouter({
  routes
})

export default router
