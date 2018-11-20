<template>
    <div id='ghost'>
        <div v-show='isNight'>
            I'm a ghost! Boo!
        </div>
    </div>
    
</template>

<script>

export default {
    data() {
        return {}
    },

    computed: {
        isNight() {
            return new Date('4 January 03:30').getHours() < 7
        }
    }
}
</script>

<style>

</style>
