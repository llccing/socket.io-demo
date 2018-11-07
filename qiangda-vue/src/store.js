import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    yourData: {},
    userlist: [],
    number: 0,
  },
  mutations: {
    // 用户列表
    setUserList(state, userlist) {
      state.userlist = userlist;
      sessionStorage.setItem('userlist', JSON.stringify(userlist))
    },

    // 用户信息
    setUserInfo(state, userinfo) {
      state.yourData = userinfo;
        sessionStorage.setItem('userinfo', JSON.stringify(userinfo))
    },

    // 倒计时
    startCount(state) { 
      state.number = 3;

      let interval = setInterval(() => {
        state.number--;
        if (state.number === 0) {
          clearInterval(interval)
        }
      },1000)
    },
  },
  actions: {},
})
