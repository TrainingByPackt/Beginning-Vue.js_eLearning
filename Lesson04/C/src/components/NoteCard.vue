<template>
    <div class="card">
        <div class="remove" @click='remove'>x</div>
        <h2>{{title}}</h2>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores sint voluptatibus in voluptate maxime amet sapiente rem, ipsam ratione voluptatum quae mollitia cumque est, eligendi nobis eum harum culpa nisi.</p>
    </div>
</template>


<script>
export default {
    props: {
        title: String,
        remove: Function
    }
}
</script>


<style scoped>
.card {
   
    border-radius: 5px;
    box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
    padding: 20px;
    display: inline-block;
    margin: 0 20px 20px 0;
    vertical-align: top;
    position: relative;
}

.remove {
    position: absolute;
    top: 10px;
    right: 20px;
    background: #ff5f6d;
    font-size: 0.6em;
    color: white;
    padding: 5px 10px;
    border-radius: 5px;
}

.remove:hover {
    cursor: pointer;
}
</style>
