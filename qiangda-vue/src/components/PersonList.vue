<template>
  <div class="persons">
    <p>当前在线人：</p>
    <div class="item-person" v-for="(item, idx) in persons" :key="idx">
      <div class="header"></div>
      {{item.username}}
    </div>
  </div>
</template>
<script>
export default {
  name: 'person-list',
  computed: {
    persons() {
      return this.$store.state.userlist
    },
  },
}
</script>
<style lang="scss">
.persons {
  .item-person {
    display: inline-block;
    border: 1px solid #93e8e0;
    padding: 8px 16px;
    margin: 5px;
    border-radius: 4px;

    .header {
    }
  }
}
</style>

