import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Example from '@/components/Example'
import Example2 from '@/components/Example2'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld,
    },
    {
      path: '/example',
      name: 'Example',
      component: Example,
    },
    {
      path: '/example2',
      name: 'Example2',
      component: Example2,
    },
  ],
})
