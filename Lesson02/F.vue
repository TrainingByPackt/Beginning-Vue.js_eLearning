<template>
    <div id='app'>
        <input v-model='text'/>

        <h4 :class='classes'>
            {{text}}
        </h4>
    </div>
    
</template>

<script>

export default {
    data() {
        return {
            text: ''
        }
    },

    computed: {
        classes() {
            const glowing = this.text.includes('fire')
            return {glowing}
        }
    }
}
</script>

<style>
.glowing {
    text-shadow: 0 0 3px #ff0000;
}

</style>
