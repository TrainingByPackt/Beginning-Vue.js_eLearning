<template>
    <div>
        <button @click='bullets++'>
            Add Bullet To List
        </button>
        <ul>
            <li v-bind:key='number' v-for='number in bullets'>
                {{myProperty}}
            </li>
        </ul>
    </div>
    
</template>

<script>
export default {
    data() {
        return {
            bullets: 0
        }
    },

    computed: {
        myProperty() {
            alert('hi')
            return 'new Bullet'
        }
    }
}
</script>

<style>

</style>
