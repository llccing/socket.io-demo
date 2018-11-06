import Vue from 'vue'
import axios from 'axios'
import io from 'socket.io-client'
import App from './App.vue'
import router from './router'
import store from './store'
Vue.config.productionTip = false

Vue.prototype.$axios = axios
const socket = io('http://localhost:3000')
Vue.prototype.$socket = socket

new Vue({
  router,
  store,
  render: h => h(App),
  created() {
    // const userinfo = JSON.parse(sessionStorage.getItem('userinfo') || '{}')

    // if (userinfo.username && userinfo.userid) {
    //   socket.emit('login', userinfo)
    // }
  },
  beforeDestroy() {
    const userinfo = JSON.parse(sessionStorage.getItem('userinfo') || '{}')
    socket.on('logout', userinfo)
  }
}).$mount('#app')
