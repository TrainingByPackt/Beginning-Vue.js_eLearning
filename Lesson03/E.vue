<template>
    <div id="app">

    <button @click="product++">next</button>
    <transition name="slide">
      <p :key='products[product % 4]'>{{products[product % 4]}}</p>
    </transition>
  </div>
</template>


<script>
export default {
    data() {
        return {
            product: 0,
            products: ['umbrella', 'computer', 'ball', 'camera']
        }
    }
}
</script>


<style>
* {
  font-family: 'Lato';
}

.slide-enter-active, .slide-leave-active {
  transition: transform .5s
}

.slide-enter {
    transform: translateX(300px);
}

.slide-leave-active {
    transform: translateX(-300px);
}

p{
  margin: 0;
  font-size: 3em;
}
</style>
