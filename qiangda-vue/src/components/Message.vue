<template>
  <div class="message">
    <div :class="classes">
      {{message}}
    </div>
  </div>
</template>
<script>
export default {
  name: 'Message',
  data() {
    return {
      message: '',
      type: '',
    }
  },
  computed: {
    classes() {
      return [this.type]
    },
  },
  methods: {
    show({ message, type, time=3 }) {
      this.message = message
      this.type = type

      setTimeout(()=>{
        this.message = '';
      }, time*1000)
    },
  },
}
</script>
<style lang="scss">
.message {
  .error {
    color: red;
  }
  .success{
    color: green;
  }
}
</style>

