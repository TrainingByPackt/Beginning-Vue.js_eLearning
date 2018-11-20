<template>
  <div id="app">

    <button @click="kisses++"> Kiss!</button>
    <transition :name="kindOfTransition" mode="in-out">
      <p :key="transformation">{{transformation}}</p>
    </transition>
  </div>
</template>

<script>

export default {
  data() {
    return {
      kisses: 0,
    }
  },

  computed: {
    kindOfTransition() {
      if (this.kisses > 5) {
        return 'zoom'
      }
      return 'fade'
    },


    transformation () {
      if (this.kisses < 3) {
        return '🐸frog'
      }

      if (this.kisses >= 3 && this.kisses <= 5) {
        return '👸princess'
      }

      if (this.kisses > 5) {
        return '🎅santa'
      }
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

.zoom-leave-active, .zoom-enter-active {
  transition: transform .5s;
}
.zoom-leave-active, .zoom-enter {
  transform: scale(0)
}

p{
  margin: 0; position: absolute; font-size: 3em;
}

</style>

