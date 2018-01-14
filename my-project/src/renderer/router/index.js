import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'test',
      component: require('@/components/test').default
    },
    {
      path: '/landing-page',
      name: 'landing-page',
      component: require('@/components/LandingPage').default
    },
    {
      path: '/circle',
      name: 'circleTest',
      component: require('@/components/circleTest').default
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})
