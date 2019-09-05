import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueProgressBar from 'vue-progressbar'

import AgilityClient from "./agility/agility-client";
import './assets/css/stylesheet.css'

Vue.config.productionTip = false

const options = {
  color: '#ffcd2d',
  failedColor: '#874b4b',
  thickness: '5px',
  transition: {
    speed: '0.2s',
    opacity: '0.6s',
    termination: 300
  },
  autoRevert: true,
  location: 'top',
  inverse: false
}

Vue.use(VueProgressBar, options)

Vue.prototype.$agility = new AgilityClient();

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
