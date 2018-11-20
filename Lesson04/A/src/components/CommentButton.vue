<template>
    <button class='button' @click='comment'>Comment</button>
</template>
<script>
export default {
  methods: {
    comment() {
      alert('commenting')
    }
  }
    
}
</script>


<style scoped>
.button {
  border: none;
  background: #576ce2;
  padding: 5px 15px;
  color: white;
  border-radius: 20px;
  margin-right: 10px;
}

</style>
