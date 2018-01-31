import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    // {
    //   path: '/',
    //   component: require('@/components/welcome').default,
    //   name: '',
    //   children: [
    //     {
    //       path: '',
    //       name: 'Home',
    //       component: require('@/components/home').default,
    //       children: [
    //         {
    //           path: '',
    //           name: 'Dashboard',
    //           component: require('@/components/LandingPage').default
    //         }
    //       ]
    //     }
    //   ]
    // },
    {
      path: '/',
      component: require('@/components/welcome').default,
      name: '',
      children: [
        {
          path: '',
          name: 'Home',
          component: require('@/components/home').default
        }
      ]
    },
    {
      path: '/home',
      component: require('@/components/home').default,
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
      path: '/help',
      component: require('@/components/home').default,
      name: '',
      children: [
        {
          path: '',
          name: 'Hilfe',
          component: require('@/components/help').default
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
          name: 'Aufgabe erstellen',
          component: require('@/components/createTask').default
        }
      ]
    },
    {
      path: '/task-verteilen',
      component: require('@/components/home').default,
      children: [
        {
          path: '',
          name: 'Aufgaben verteilen',
          component: require('@/components/createTask').default
        }
      ]
    },
    {
      path: '/aufgaben',
      component: require('@/components/home').default,
      children: [
        {
          path: '',
          name: 'Aufgabe ansehen',
          component: require('@/components/aktuelleaufgaben').default
        }
      ]
    },
    {
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
