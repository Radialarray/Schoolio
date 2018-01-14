import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: require('@/components/home').default
    },
    {
      path: '/landing-page',
      name: 'landing-page',
      component: require('@/components/LandingPage').default
    },
    {
      path: '/circle',
      name: 'circleTest',
      component: require('@/components/pupils_sortable').default
    },
    {
      path: '/nav',
      name: 'nav',
      component: require('@/components/navigation').default
    },
    {
      path: '/screen2',
      name: 'screen2',
      component: require('@/components/screen2').default
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})
