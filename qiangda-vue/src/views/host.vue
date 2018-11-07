<template>
  <div class="host">
    <person-list></person-list>
    <Message ref="message" style="margin-top: 50px;"></Message>
    <op-btn @click="start">
      开始抢答
    </op-btn>
  </div>
</template>
<script>
import Message from '@/components/Message.vue'
import PersonList from '@/components/PersonList.vue'
import opBtn from '@/components/opBtn.vue'
export default {
  name: 'host',
  components: {
    Message,
    PersonList,
    opBtn,
  },
  data() {
    return {}
  },

  mounted() {
    // this.$axios.get('')
  },
  methods: {
    startHome() {

    },
    start() {
      this.$socket.emit('startGame')
      
      this.$refs.message.show({
        message: '提示: 抢答成功！',
        type: 'success',
      })
    },
  },
}
</script>

