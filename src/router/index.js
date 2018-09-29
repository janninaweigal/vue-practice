import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Login from '@/components/Login'
import VueDirective from '@/examples/VueDirective'
import Directive1 from '@/examples/VueDirecitive1'
import Event from '@/examples/event'
import Form from '@/examples/form'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/HelloWorld',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/directive',
      name: 'directive',
      component: VueDirective
    },
    {
      path: '/directive1',
      name: 'directive1',
      component: Directive1
    },
    {
      path: '/event',
      name: 'event',
      component: Event
    },
    {
      path: '/',
      name: 'form',
      component: Form
    }
  ]
})
