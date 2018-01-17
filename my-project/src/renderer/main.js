import Vue from 'vue'
import axios from 'axios'
import VueProgress from 'vue-progress-path'
import Vuetify from 'vuetify'
import VueCircle from 'vue2-circle-progress'
import VueDrag from './components/pupils_sortable.vue'
import VueNav from './components/navigation.vue'
import VueHome from './components/home.vue'
import VueDashboard from './components/dashboard.vue'

import './assets/css/styles.min.css'
import 'uikit'
import '../../node_modules/vuetify/dist/vuetify.min.css'

import App from './App'
import router from './router'
import store from './store'

import serialport from './assets/js/serialport'

if (!process.env.IS_WEB) Vue.use(require('vue-electron'))
Vue.http = Vue.prototype.$http = axios
Vue.config.productionTip = false

Vue.use(VueProgress)
Vue.use(Vuetify)

Vue.component('VueCircle', VueCircle)
Vue.component('VueDrag', VueDrag)
Vue.component('VueNav', VueNav)
Vue.component('VueHome', VueHome)
Vue.component('VueDashboard', VueDashboard)

new Vue({
  template: '<App/>',
  components: { App },
  router,
  store,
  data () {
    return {
      gaugeValue: 0
    }
  }
}).$mount('#app')
