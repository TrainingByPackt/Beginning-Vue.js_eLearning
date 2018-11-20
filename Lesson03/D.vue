<template>
  <div id="app">

    <button @click="kisses++"> Kiss!</button>
    <transition name="fade">
      <p v-if='kisses < 3' key='frog'>Frog</p>
      <p v-if='kisses >= 3' key='frog'>Princess</p>
    </transition>
  </div>
</template>

<script>

export default {
  data() {
    return {
      kisses: 0,
    }
  }
}
</script>

<style>
* {
  font-family: 'Lato';
}

.fade-enter-active, .fade-leave-active {
  transition: opacity .5s
}
.fade-enter, .fade-leave-active {
  opacity: 0
}

p{
  margin: 0; position: absolute; font-size: 3em;
}

</style>

