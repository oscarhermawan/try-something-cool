import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Login from '@/components/Login'
import Register from '@/components/Register'
import Utama from '@/components/Utama'
import Contactus from '@/components/Contactus'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Utama',
      component: Utama
    },
    {
      path: '/contactus',
      name: 'Contact Us',
      component: Contactus
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
    }
  ]
})
