<template>
  <div id="app">
    <img src="./assets/logo.png">
    <div class="totalClass">
      <ul>
        <li><router-link to="/html/123/456" tag="li" active-class="link_active">HTMLaa</router-link></li>
        <li><router-link to="/css" tag="li" active-class="link_active">CSS</router-link></li>
        <li><router-link to="/search/123" tag="li" active-class="link_active">搜索</router-link></li>
        <li><router-link to="/elementUI" tag="li" active-class="link_active">elementUI</router-link></li>
        <li><router-link to="/elementUI" tag="li" active-class="link_active">导航</router-link></li>
        <li><router-link to="/vuex" tag="li" active-class="link_active">vuex</router-link></li>
        <li><router-link to="/echarts" tag="li" active-class="link_active">echarts</router-link></li>
      </ul>
    </div>
    <router-view :key="$route.path"></router-view>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 20px;
}
.totalClass li {
  display: inline-block;
  cursor: pointer;
  padding: 10px;
}
.link_active {
  text-decoration: underline;
}
</style>
