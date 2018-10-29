<template>
  <div class="persons">
    <div class="item-person" v-for="(item, idx) in persons" :key="idx">
      <div class="header"></div>
      {{item.username}}
    </div>
  </div>
</template>
<script>
export default {
  name: 'person-list',
  props: {
    persons: Array,
  },
}
</script>
<style lang="scss">
.persons {
  display: flex;
  flex-wrap: wrap;

  .item-person {
    width: 20%;
    margin-top: 10px;
    .header {
      width: 60%;
      margin: 0 auto;
      height: 40px;
      background-color: #45b7b7;
      border-radius: 50%;
      margin-bottom: 5px;
    }
  }
}
</style>

