import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import AgilityClient from "./agility/agility-client";
import './assets/css/reset.css'
import './assets/css/stylesheet.css'

Vue.config.productionTip = false

Vue.prototype.$agility = new AgilityClient();

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
