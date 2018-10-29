import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    yourData: {},
    userList: [],
  },
  mutations: {
    setYourInfo(state, user) {
      state.yourData = user
      console.log(user)
    },
    setAllUser(state, users) {
      state.userList = users
    },
    getUserInfo(state) {
      let username = sessionStorage.getItem('username')
      if (username) {
        this._vm.$socket.emit('getUserInfo', username)
        this._vm.$socket.on('getUserInfoResp', user => {
          console.log(111, user)
          state.yourData = user
        })
      }
    },
  },
  actions: {
  },
})
