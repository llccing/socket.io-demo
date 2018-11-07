<template>
  <div id="app">
    <div id="nav">
      <h1>
        <i class="fa fa-home" aria-hidden="true"></i>
        来抢答
      </h1>
      <counter></counter>
    </div>
    <router-view />
  </div>
</template>
<script>
import counter from './components/counter.vue'

export default {
  components: {
    counter,
  },
  mounted() {
    const userinfo = JSON.parse(sessionStorage.getItem('userinfo') || '{}')
    if (userinfo.username) {
      this.$store.commit('setUserInfo', userinfo)
    }

    const userlist = JSON.parse(sessionStorage.getItem('userlist') || '{}')
    if (userlist.length > 0) {
      this.$store.commit('setUserList', userlist)
    }

    // 响应其他人的登录
    this.$socket.on('userlist', userlist => {
      this.$store.commit('setUserList', userlist)
    })

    // 开始倒计时
    this.$socket.on('startGame', () => {
      this.$store.commit('startCount')
    })

    // 接受其他人的退出
    this.$socket.on('logout', userlist => {
      this.$store.commit('setUserList', userlist)
    })
    
    // 此处不能使用 vue 的生命周期来停止，所以绑定了 onbeforeunload，窗口即将关闭时会触发该事件。
    let that = this;
    window.onbeforeunload = function(e) {
      const userinfo = JSON.parse(sessionStorage.getItem('userinfo') || '{}')
      that.$socket.emit('logout', userinfo)
    }
  },

  destroyed() {
    // 关闭浏览器标签时，该事件并没有执行。日后再细细研究。
    // const userinfo = JSON.parse(sessionStorage.getItem('userinfo') || '{}')
    //   this.$socket.emit('logout', userinfo)
  },
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

  max-width: 768px;
  margin: 0 auto;
}

#nav {
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
body {
  margin: 0;
}
</style>
