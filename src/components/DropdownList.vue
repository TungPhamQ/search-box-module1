<template>
  <div class="dropdown-list">
    <div class="item" v-for="item in searchList" :key="item.id">
      <div class="item-code">{{ item.code }}</div>

      <div class="item-name">{{ item.name }}</div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    searchList: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {};
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.dropdown-list {
  width: 200px;
  margin: auto;
  background: rgb(0, 153, 255);
  color: white;
  .item {
    cursor: pointer;
    &:hover {
      background: rgba(157, 10, 255, 0.356);
    }
  }
  .item-code,
  .item-name {
    display: inline-block;
  }
}
</style>
