<template>
    <div id="app">
        <header>
          <h1>Clothes Site</h1>

          <router-link to="/">Home</router-link>
          <router-link to="/clothes">Clothes</router-link>
          <router-link to="/sale">Sale</router-link>
        </header>
        <div class='spacer'></div>

        <router-view></router-view>
    </div>
</template>

<script>

export default {

}
</script>

<style>
* {
  box-sizing: border-box;
}
body {
  padding: 0;
  margin: 0;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

}

header {
  padding: 10px;
  background: #e2e2e8;
  position: fixed;
  width: 100%;
  margin-top: 0;
  top: 0;
}

header h1 {
  margin: 0;
}

.spacer {
  height: 120px;
}
</style>
