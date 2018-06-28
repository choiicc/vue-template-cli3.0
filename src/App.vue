<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/test">Test</router-link>
    </div>
    <div>{{$t('确认')}}</div>
    <router-view/>
  </div>
</template>

<script>
export default {
  created() {
    console.log("created", this.$t("确认"));
  },
  mounted() {
    console.log("mounted", this.$t("取消"));
  }
};
</script>

<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>