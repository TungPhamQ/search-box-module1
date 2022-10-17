<template>
  <div class="search-box">
    <div class="search-input">
      <MagnifyGlass />
      <input type="text" v-model="searchInput" />
    </div>
  </div>
</template>

<script>
import MagnifyGlass from "./icon/MagnifyGlass.vue";
export default {
  props: {},
  components: { MagnifyGlass },
  data() {
    return { searchInput: "" };
  },
  watch: {
    searchInput() {
      this.$emit("handleSearch", this.searchInput);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.search-input {
  display: inline-block;
  width: 200px;
  border: 2px solid rgb(161, 160, 160);
  input {
    border-top-style: hidden;
    border-right-style: hidden;
    border-left-style: hidden;
    border-bottom-style: hidden;
  }
  input:focus {
    outline: none;
  }
}
</style>
