import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Login from '@/components/Login'
import VueDirective from '@/examples/VueDirective'
import Directive1 from '@/examples/VueDirecitive1'
import Event from '@/examples/event'
import vform from '@/examples/vform'
import vprops from '@/examples/vprops'
import vprops1 from '@/examples/vprops1'
import vslot from '@/examples/vslot'
import inumber from '@/examples/inputNumber'
import basecomponent from '@/examples/basecomponent'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'vslot',
      component: vslot
    },
    {
      path: '/vprops1',
      name: 'vprops1',
      component: vprops1
    },
    {
      path: '/basecomponent',
      name: 'basecomponent',
      component: basecomponent
    },
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
      path: '/form',
      name: 'form',
      component: vform
    },
    {
      path: '/vprops',
      name: 'vprops',
      component: vprops
    },
    {
      path: '/inumber',
      name: 'inumber',
      component: inumber
    }
  ]
})
