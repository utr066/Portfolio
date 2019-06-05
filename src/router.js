import Vue from 'vue'
import Router from 'vue-router'
import Top from './components/pages/Top.vue'
import Profile from './components/pages/Profile.vue'
import Works from './components/pages/Works.vue'
import Skill from './components/pages/Skill.vue'
import Contact from './components/pages/Contact.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'top',
      component: Top
    },
    {
      path: '/profile',
      name: 'profile',
      component: Profile
    },
    {
      path: '/works',
      name: 'works',
      component: Works
    },
    {
      path: '/skill',
      name: 'skill',
      component: Skill
    },
    {
      path: '/contact',
      name: 'contact',
      component: Contact
    }
  ]
})
