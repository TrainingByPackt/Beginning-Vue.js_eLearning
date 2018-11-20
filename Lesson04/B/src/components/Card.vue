<template>
    <div class='card'>
        <slot name='title'></slot>
        <hr/>
        <slot name='content'></slot>
    </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>
.card {
    height: 300px;
    width: 280px;
    border-radius: 5px;
    box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
    padding: 20px;
    display: inline-block;
    margin: 0 20px 20px 0;
    vertical-align: top;
}
</style>
