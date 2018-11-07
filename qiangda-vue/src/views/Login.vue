<template>
  <div class="about">
    <div class="form">
      <div style="color: red;">{{msg}}</div>
      <input class="input" type="text" v-model="username" />
      <button class="btn" @click.stop="setName">设置名字</button>
    </div>
  </div>
</template>
<script>
export default {
  name: 'about',
  data() {
    return {
      username: '',
      msg: '',
    }
  },
  methods: {
    setName() {
      let username = this.username.trim()
      if (username) {
        this.msg = ''
        this.$socket.emit('login', {
          username: this.username,
          userid: null,
        })

        this.$socket.on('login', userInfo => {
          this.$store.commit('setUserInfo', userInfo)
          this.$router.replace('/')
        })
      } else {
        this.msg = '请设置名字'
      }
    },
  },
}
</script>
<style lang="scss">
.form {
  .input {
    border: 1px solid #ccc;
    padding: 5px 8px;
  }

  .btn {
    background: #ccc;
    padding: 8px 16px;
    border-radius: 4px;
    display: block;
    margin: 0 auto;
    margin-top: 20px;
  }
}
</style>

