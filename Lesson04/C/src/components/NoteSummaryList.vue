<template>
    <div >
        <div 
            class="card" v-for='item in list' 
            v-bind:key='item.id'>
            <p>{{item.name}}</p>
        </div>

    </div>
    
</template>


<script>
export default {
    props: {
        list: Array
    }
}
</script>


<style scoped>
.card {
    width: 200px;
    padding: 10px;
    display: inline-block;
    margin: 0 20px 20px 0;
    vertical-align: top;
    position: relative;
    border-bottom: 1px solid #ddd;
}

p {
    margin: 0;
}


</style>
