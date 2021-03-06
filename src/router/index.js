import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../components/home/Home.vue'
import User from '../components/user/User.vue'
import Classify from '../components/home/classify/Classify.vue'
import HandTour from '../components/home/classify/HandTour.vue'

// 防止重复同一个路由跳转点击报错
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    redirect: '/home/classify',
    component: Home,
    children: [
      {
        path: '/home/classify',
        component: Classify
      },
      {
        path: '/home/handTour',
        component: HandTour
      },
    ]
  },
  {
    path: '/user',
    component: User
  },
]

const router = new VueRouter({
  routes
})

export default router
