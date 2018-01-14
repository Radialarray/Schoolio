import Vue from 'vue'
import axios from 'axios'
import VueProgress from 'vue-progress-path'
import Vuetify from 'vuetify'
import VueCircle from 'vue2-circle-progress'
import SvgCircle from './components/circle.vue'
import circleTest from './components/circleTest.vue'
import vueTest from './components/test.vue'

import './assets/css/styles.min.css'
import 'uikit'
import '../../node_modules/vuetify/dist/vuetify.min.css'

import App from './App'
import router from './router'
import store from './store'

if (!process.env.IS_WEB) Vue.use(require('vue-electron'))
Vue.http = Vue.prototype.$http = axios
Vue.config.productionTip = false

Vue.use(VueProgress)
Vue.use(Vuetify)

Vue.component('VueCircle', VueCircle)

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
