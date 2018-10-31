import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    yourData: {},
    userlist: [],
  },
  mutations: {
    setInfo(state, data) {
      state.yourData = data.userinfo;
      state.userlist = data.userlist;
    },
  },
  actions: {
  },
})
