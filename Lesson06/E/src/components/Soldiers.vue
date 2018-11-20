<template>
    <div class="soldiers">
        <span v-bind:key='i' v-for="(soldier, i) in 10">
            🗡️
        </span>
    </div>
</template>

<script>
export default {
    created() {
        const user = $route.params.id
        axios.get('my-server.com/' + user + '/solders')
    }
}
</script>

