import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

let routerList = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/login',
      name: 'login',
      // route level code-splitting
      // this generates a separate chunk (login.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "login" */ './views/Login.vue'),
    },
    {
      path: '/answer',
      name: 'answer',
      component: () => import('./views/answer.vue'),
    },
    ,
    {
      path: '/host',
      name: 'host',
      component: () => import('./views/host.vue'),
    },
  ],
})

routerList.beforeEach((to, from, next) => {
  const username = sessionStorage.getItem('username')
  
  if (username) {
    if (to.name === 'login') {
      next('/')
    } else {
      next()
    }
  } else if (to.name !== 'login') {
    next('/login')
  } else {
    next()
  }
})

export default routerList
