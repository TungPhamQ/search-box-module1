<template>
  <SearchBox :searchList="searchList" />
</template>

<script>
import ProvincesApi from "./api/provincesApi";
import SearchBox from "./components/SearchBox.vue";

export default {
  name: "App",
  components: {
    SearchBox,
  },
  data() {
    return {
      searchList: [
        {
          code: 29,
          name: "Ha noi",
        },
        {
          code: 51,
          name: "TP HCM",
        },
        {
          code: 16,
          name: "Hai Phong",
        },
      ],
    };
  },
  async created() {
    await this.getListProvinces();
  },
  methods: {
    async getListProvinces() {
      const res = await ProvincesApi.getList();
      console.log(res);
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
</style>
