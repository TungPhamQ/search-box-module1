<template>
  <div class="search-box">
    <div>
      <SearchInput @handleSearch="handleSearch" />
    </div>
    <DropdownList v-if="isShow" :searchList="searchList" />
  </div>
</template>

<script>
import DropdownList from "./DropdownList.vue";
import SearchInput from "./SearchInput.vue";
export default {
  props: {
    searchList: {
      type: Array,
    },
  },
  components: { DropdownList, SearchInput },
  data() {
    return {
      isShow: false,
    };
  },
  methods: {
    handleSearch(e) {
      console.log(e);
      if (!e) this.isShow = false;
      else this.isShow = true;
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped></style>
