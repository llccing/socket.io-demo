<template>
  <div class="home">
    <router-link class="btn" to="/answer">我来抢答</router-link>

    <router-link class="btn yellow" to="/host">我来主持</router-link>
  </div>
</template>
<script>
export default {
  name: 'home',
  mounted() {
    // let username = sessionStorage.getItem('username')
    // console.log(username)
    // this.$socket.emit('getUserInfo', username)
    // this.$socket.on('getUserInfoResp', user => {
    //   this.$store.commit('setYourInfo', user)
    // })
  },
}
</script>

<style lang="scss">
.home {
  padding: 0 20px;
  .btn {
    display: block;
    text-decoration: none;
    border: 1px solid #ddd;
    border-radius: 4px;
    padding: 20px;
    color: #fff;
    background-color: #0c907d;
    margin-bottom: 30px;
  }
  .yellow {
    background-color: #ffcd3c;
  }
}
</style>

