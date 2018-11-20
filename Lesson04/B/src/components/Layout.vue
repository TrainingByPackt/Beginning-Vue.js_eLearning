<template>
    <div>
        <header></header>
        <div class='wrapper'>
            <slot></slot>
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style>

.wrapper {
  margin: 0 auto;
  width: 80%;
  max-width: 900px;
  text-align: left;
}

header {
  height: 40px;
  background: #222;
  margin-bottom: 20px;
  width: 100%;
}

</style>
