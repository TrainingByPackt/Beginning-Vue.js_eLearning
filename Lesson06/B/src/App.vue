<template>
    <div id="app">
        <div class='nav'>
            <router-link to='/' exact>Home</router-link>
            <router-link to='/bar'>Bar</router-link>
            <router-link to='/menu'>Menu</router-link>
            <router-link to='/about'>About</router-link>

            <li v-bind:key='i' v-for='i in 10'>
                <router-link :to="{ name: 'menu', params: {id: i}}">Menu {{i}}</router-link>
            </li>
        </div>
       <router-view></router-view>
       
    </div>
</template>

<script>

export default {

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

a.router-link-active {
    background: gainsboro;
}


</style>
