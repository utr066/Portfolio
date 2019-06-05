import Vue from 'vue'
import Router from 'vue-router'
import Top from './components/pages/Top.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'top',
      component: Top
    }
  ]
})
