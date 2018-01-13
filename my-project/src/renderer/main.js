import Vue from 'vue'
import axios from 'axios'
import VueProgressBar from 'vue-progressbar'

import './assets/css/styles.min.css'
import 'uikit'

import App from './App'
import router from './router'
import store from './store'

if (!process.env.IS_WEB) Vue.use(require('vue-electron'))
Vue.http = Vue.prototype.$http = axios
Vue.config.productionTip = false

const options = {
  color: '#bffaf3',
  failedColor: '#874b4b',
  thickness: '5px',
  transition: {
    speed: '0.2s',
    opacity: '0.6s',
    termination: 300
  },
  autoRevert: true,
  location: 'left',
  inverse: false
}

Vue.use(VueProgressBar, options)

new Vue({
  components: { App },
  router,
  store,
  template: '<App/>'
}).$mount('#app')
