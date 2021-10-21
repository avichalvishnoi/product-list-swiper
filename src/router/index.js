import Vue from 'vue'
import VueRouter from 'vue-router'
import Start from '../Pages/Start.vue'
import NotFound from '../Pages/404.vue';


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Start',
    component: Start
  },
  {
    path: "/preview/:id",
    name: 'Preview',
    component: () => import('../Pages/Preview.vue')
  },
  {
    path: "*",
    name: "404",
    component: NotFound
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
