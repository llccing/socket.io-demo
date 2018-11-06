<template>
  <div class="home">
    <router-link class="btn" to="/answer">我来抢答</router-link>
    <router-link class="btn yellow" to="/host">我来主持</router-link>

    <router-view />
  </div>
</template>
<script>
export default {
  name: 'home',
  mounted() {
    this.$socket.on('sendUserInfo', data => {
      sessionStorage.setItem('userinfo', JSON.stringify(data.userinfo))
      sessionStorage.setItem('userlist', JSON.stringify(data.userlist))

      console.log('home page sendUserInfo', data)
    })
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

