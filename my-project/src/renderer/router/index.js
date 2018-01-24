import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: require('@/components/newHome').default,
      name: '',
      children: [
        {
          path: '',
          name: 'Home',
          component: require('@/components/dashboard').default
        }
      ]
    },
    {
      path: '/landing-page',
      component: require('@/components/home').default,
      children: [
        {
          path: '',
          name: 'landing-page',
          component: require('@/components/LandingPage').default
        }
      ]
    },
    {
      path: '/pupils',
      component: require('@/components/home').default,
      children: [
        {
          path: '',
          name: 'landing-page',
          component: require('@/components/pupils_sortable').default
        }
      ]
    },
    {
      path: '/create-task',
      component: require('@/components/home').default,
      children: [
        {
          path: '',
          name: 'landing-page',
          component: require('@/components/createTask').default
        }
      ]
    },
    {
      path: '/circle',
      name: 'circleTest',
      component: require('@/components/pupils_sortable').default
    }, {
      path: '/nav',
      name: 'nav',
      component: require('@/components/navigation').default
    }, {
      path: '/screen2',
      name: 'screen2',
      component: require('@/components/screen2').default
    }, {
      path: '*',
      redirect: '/'
    }, {
      path: '/dashboard',
      component: require('@/components/home').default,
      children: [// UserHome will be rendered inside User's <router-view>
        // when /user/:id is matched
        {
          path: '',
          component: require('@/components/dashboard').default
        }
      ]
    }
  ]
})
