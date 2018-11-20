<template>
  <div id="app">
    <div class='wrapper'>
      <h1>Title of Blog</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere qui possimus animi dolor facilis, nemo, aliquam veritatis, repudiandae ab fuga cumque fugit doloremque quo. Reiciendis corporis voluptates hic consequuntur ipsam!</p>
      <like-button/>
      <comment-button/>
      
    </div>
  </div>
</template>

<script>
import LikeButton from './components/LikeButton'
import CommentButton from './components/CommentButton'

export default {
  name: 'app',

  components: {
    LikeButton,
    CommentButton
  },

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

.wrapper {
  margin: 0 auto;
  width: 80%;
  max-width: 700px;
  text-align: left;
}



</style>
