<template>
  <div id="app">
    <h1>Kindoms Encyclopedia</h1>

    <router-link to="/user/Stark/">Stark</router-link>
    <router-link to="/user/Lannister/">Lannister</router-link> 

    <router-view></router-view>
  </div>
</template>

<script>
export default {
  

}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
