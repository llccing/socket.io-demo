<template>
  <div class="answer">
    <person-list :persons="persons"></person-list>

    <Message ref="message" style="margin-top: 50px;"></Message>

    <op-btn @click="answer">
      抢
    </op-btn>
  </div>

</template>
<script>
import Message from '@/components/Message.vue'
import PersonList from '@/components/PersonList.vue'
import opBtn from '@/components/opBtn.vue'
export default {
  name: 'answer',
  components: {
    Message,
    PersonList,
    opBtn,
  },
  data() {
    return {
      // 已经加入的人
      persons: [
        {
          username: '张三',
        },
        {
          username: '李四',
        },
        {
          username: '王五',
        },
        {
          username: '666',
        },
        {
          username: '23333',
        },
        {
          username: '23333',
        },
        {
          username: '23333',
        },
        {
          username: '23333',
        },
        {
          username: '23333',
        },
        {
          username: '23333',
        },
      ],
    }
  },
  mounted(){
    this.$socket.emit('online', {
      username: '张三',
      userid: null,
    })

    this.$socket.on('resOnline',resp =>{
      console.log(resp)
    })
  },
  methods: {
    answer() {
      console.log('answer')
      this.$axios.get('/get')
      this.$refs.message.show({
        message: '提示: 抢答成功！',
        type: 'success',
      })
    },
  },
}
</script>
<style lang="scss">
.answer {
  .clear::after {
    content: '';
    display: block;
    clear: both;
  }

  
}
</style>

