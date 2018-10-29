import Vue from 'vue'
import axios from 'axios'
import io from 'socket.io-client'
import App from './App.vue'
import router from './router'
import store from './store'
Vue.config.productionTip = false

Vue.prototype.$axios = axios;
Vue.prototype.$socket = io('http://localhost:3000');
console.log(io)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
