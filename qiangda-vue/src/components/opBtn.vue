<template>
  <div class="op-btn">
    <a href="javascript:" class="btn" @click="click">
      <slot></slot>
    </a>
  </div>
</template>
<script>
export default {
  name: 'op-btn',
  methods: {
    click() {
      this.$emit('click')
    },
  },
}
</script>
<style lang="scss">
.op-btn {
  position: absolute;
  bottom: 30px;
  left: 0;
  right: 0;
  text-align: center;

  .btn {
    text-decoration: none;
    border: 1px solid #ddd;
    border-radius: 4px;
    padding: 20px;
    color: #fff;
    background-color: #0c907d;
    display: inline-block;
    min-width: 100px;
  }
}
</style>
