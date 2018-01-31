import {stillConnected, uid} from './serialReadRenderer'
import _ from 'lodash'

import Vue from 'vue'
import axios from 'axios'
import VueProgress from 'vue-progress-path'
import Vuetify from 'vuetify'
import VueCircle from 'vue2-circle-progress'
import VueDrag from './components/pupils_sortable.vue'
import VueNav from './components/navigation.vue'
import VueHome from './components/home.vue'
import VueDashboard from './components/dashboard.vue'
import VueStatusbar from './components/statusbar.vue'
import VueConnect from './components/connect.vue'
import VeeValidate from 'vee-validate'

import './assets/css/styles.min.css'
import 'uikit'
import '../../node_modules/vuetify/dist/vuetify.min.css'
import '../../node_modules/vue2-animate/dist/vue2-animate.min.css'

import App from './App'
import router from './router'
import store from './store'

if (!process.env.IS_WEB) { Vue.use(require('vue-electron')) }
Vue.http = Vue.prototype.$http = axios
Vue.config.productionTip = false

const config = {
  delay: 50,
  strict: false,
  classes: true,
  classNames: {
    touched: '', // the control has been blurred
    untouched: '', // the control hasn't been blurred
    valid: '', // model is valid
    invalid: 'error', // model is invalid
    pristine: '', // control has not been interacted with
    dirty: '' // control has been interacted with
  }
}
Vue.use(VeeValidate, config)

Vue.use(VueProgress)
Vue.use(Vuetify)

Vue.component('VueCircle', VueCircle)
Vue.component('VueDrag', VueDrag)
Vue.component('VueNav', VueNav)
Vue.component('VueHome', VueHome)
Vue.component('VueDashboard', VueDashboard)
Vue.component('VueStatusbar', VueStatusbar)
Vue.component('VueConnect', VueConnect)

new Vue({
  template: '<App/>',
  components: {
    App,
    VueCircle,
    VueDrag,
    VueNav,
    VueHome,
    VueDashboard,
    VueStatusbar,
    VueConnect
  },
  router,
  store,
  VueCircle,
  VueDrag,
  VueNav,
  VueHome,
  VueDashboard,
  VueStatusbar,
  data () {
    return {gaugeValue: 0}
  },
  // watch: {
  //   '$route' (to, from) {
  //     console.log('route' + this.$route.path)
  //   }
  // }
  mounted: function () {
    // store.commit('SET_CURRENTID', {
    //   current_id: this.uid
    // })
  }
}).$mount('#app')
// setInterval(function () {
//   console.log('Message: ' + uid)
// }, 1000)
