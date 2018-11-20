<template>
  <div id="app">

    <layout>
      <h1>Title of Page</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, ab. Praesentium officia exercitationem amet velit quasi nam, explicabo corrupti, voluptas animi repudiandae magnam modi repellat iusto quam ullam laboriosam reprehenderit!</p>
      
      <card>
        <h2 slot='title'>Card Text 1</h2>
        <div slot='content'>
          <p>This is a description of a cards</p>
          <button>Go</button>
        </div>
      </card>
      
    </layout>


  </div>
</template>

<script>
import Layout from './components/Layout'
import Card from './components/Card'

export default {
  name: 'app',
  components: {
    Layout,
    Card
  },

}
</script>

<style>
body {
  margin: 0;
  padding: 0;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}


</style>
