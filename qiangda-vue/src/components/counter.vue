<template>
  <div v-if="number>0" class="couter">
    {{number}}
  </div>
</template>
<script>
export default {
  computed: {
    number() {
      return this.$store.state.number
    },
  },
}
</script>
<style lang="scss">
.couter {
  color: #0a907d;
  font-size: 48px;
  font-weight: 600;
}
</style>
